import type { PageServerLoad } from "./$types";
import { redirect, type Actions } from "@sveltejs/kit";
import { config } from "../../../config";
import { sha256 } from "js-sha256";
import { getDB } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import jwt from "jsonwebtoken";

export const load = (async ({ locals }) => {
  if (locals.sessionUser != undefined) {
    throw redirect(303, "/app");
  }
  return locals
}) satisfies PageServerLoad;

export const actions = {
  login: async ({ cookies, request }) => {
    const formData = await request.formData();

    const email: string = formData.get("email")?.toString() || "";
    const password: string = formData.get("password")?.toString() || "";

    if (email == "" || password == "") {
      if (config.debug == true)
        console.log("[DEBUG] Username/password not sent");
      return {
        code: 400,
        message: "Please input both a username and a password.",
        refFields: "ep",
      };
    }

    // E-mail does not contain @something.com
    if (email.split("@").length < 2) {
      if (config.debug == true) console.log("[DEBUG] Email does not contain @");

      return { code: 422, message: "Invalid e-mail.", refFields: "e" };
    }
    // The part after @ in the email does not contain a .
    if (email.split("@")[1].split(".").length < 2) {
      if (config.debug == true)
        console.log("[DEBUG] Email does not contain . end");

      return { code: 422, message: "Invalid e-mail.", refFields: "e" };
    }

    const sha256Email: string = sha256(email);
    const sha256Password: string = sha256(password);

    const { db } = getDB();
    const docRef = doc(db, "users", sha256Email);
    const document = (await getDoc(docRef)).data();

    if (document == undefined) {
      if (config.debug == true)
        console.log(
          "[DEBUG] User not found in firestore database. Document returned undefined."
        );

      return {
        code: 401,
        message: "Invalid username/password.",
        refFields: "ep"
      };
    }

    const dbPassword = document.password;
    const name = document.name;
    const userid = document.userid;

    if (sha256Password == dbPassword) {
      const token = jwt.sign(
        {
          userid: userid,
          name: name,
        },
        config.jwt_secret,
        {
          expiresIn: "7d",
        }
      );

      cookies.set("AuthorizationToken", `Bearer ${token}`, {
        httpOnly: true,
        secure: true,
        path: "/",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7,
      })

      throw redirect(303, "/app")
    } else {
      return { code: 401, message: "Invalid username/password.", refFields: "ep" }; 
    }

  },
} satisfies Actions;
