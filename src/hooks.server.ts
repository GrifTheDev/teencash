import { redirect, type Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import jwt from "jsonwebtoken";
import { config } from "../config";

// send to /app/setup if a route that is under /app is being accessed
const handleFirst = (async ({ event, resolve }) => {
  const setupCookie = event.cookies.get("RequiresSetup")
  const mainRoute = event.route.id?.split("/")[1]

  if (setupCookie == "true" && mainRoute == "app" && event.route.id != "/app/setup") {
    throw redirect(303, "/app/setup")
  }

  return await resolve(event);
}) satisfies Handle;

const handleSecond = (async ({ event, resolve }) => {
  const cookie = event.cookies.get("AuthorizationToken");

  if (cookie) {
    const token = cookie.split(" ")[1];

    try {
      const userInfo = jwt.verify(token, config.jwt_secret);

      // @ts-ignore
      const sessionUser = { name: userInfo.name, userId: userInfo.userid };
      event.locals.sessionUser = sessionUser;
    } catch (error) {
      console.log(
        "JSON Web Token verification failed with reason: ",
        error,
        ". Deleting cookie and requesting login."
      );
      event.cookies.delete("AuthorizationToken");
    }
  }

  return await resolve(event);
}) satisfies Handle;

// 1, 2 -> 2, 1
export const handle = sequence(handleFirst, handleSecond);
