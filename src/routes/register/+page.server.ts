import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { sha256 } from "js-sha256";
import { config } from "../../../config";
import { getDB } from "../../firebase";
import { generateId } from "../../utils";
import jwt from "jsonwebtoken";

export const load = (async ({ locals }) => {
  if (locals.sessionUser != undefined) {
    throw redirect(303, "/app");
  }
  return locals;
}) satisfies PageServerLoad;

export const actions = {
  register: async ({ cookies, request }) => {
    const formData = await request.formData();

    const name: string = formData.get("name")?.toString() || "";
    const email: string = formData.get("email")?.toString() || "";
    const password: string = formData.get("password")?.toString() || "";
    const confirmPassword: string =
      formData.get("confirmPassword")?.toString() || "";

    if (name == "" || email == "" || password == "" || confirmPassword == "") {
      if (config.debug == true)
        console.log(name, email, password, confirmPassword);
      return {
        code: 400,
        message: "Please input data into all fields.",
      };
    }

    if (email.split("@").length < 2) {
      if (config.debug == true) console.log("[DEBUG] Email does not contain @");

      return { code: 422, message: "Invalid e-mail." };
    }
    // The part after @ in the email does not contain a .
    if (email.split("@")[1].split(".").length < 2) {
      if (config.debug == true)
        console.log("[DEBUG] Email does not contain . end");

      return { code: 422, message: "Invalid e-mail." };
    }

    // password validation

    const pattern =
      /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!"#$%&/()=?+*]).*$/;
    const match = pattern.test(password);

    if (match == false)
      return {
        code: 400,
        message:
          "Your password must contain an uppercase and lowercase letter, a number and a special character. It must also be longer than 8 characters.",
      };

    // confirm password == password

    if (confirmPassword != password)
      return {
        code: 400,
        message: "Passwords do not match.",
      };
    // add document to firebase

    const { db } = getDB();
    const sha256Email: string = sha256(email);
    const docRef = doc(db, "users", sha256Email);
    const userData = (await getDoc(docRef)).data();

    if (userData != undefined)
      return {
        code: 409,
        message: `An account with the e-mail ${email} already exists. Would you like to log in?`,
      };

    const sha256Password: string = sha256(password);
    const userid: string = await generateId(16);

    const toDB = {
      name: name,
      password: sha256Password,
      userid: userid,
    };

    await setDoc(docRef, toDB);

    const token = jwt.sign(
      {
        userid: userid,
        name: name,
      },
      config.jwt_secret,
      { expiresIn: "7d" }
    );

    cookies.set("AuthorizationToken", `Bearer ${token}`, {
      httpOnly: true,
      secure: true,
      path: "/",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
    });

    throw redirect(303, "/app");
  },
} satisfies Actions;
