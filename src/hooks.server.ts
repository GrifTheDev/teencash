
import type { Handle } from "@sveltejs/kit"
import jwt from "jsonwebtoken"
import { config } from "../config";

export const handle = (async ({event, resolve}) => {

    const cookie = event.cookies.get("AuthorizationToken")
    
    if (cookie) {
        const token = cookie.split(" ")[1]

        try {
            const userInfo = jwt.verify(token, config.jwt_secret)

            // @ts-ignore
            const sessionUser = {name: userInfo.name, userId: userInfo.userid}
            event.locals.sessionUser = sessionUser
        } catch (error) {
            console.log(error)
        }
    }


    return await resolve(event)
}) satisfies Handle;