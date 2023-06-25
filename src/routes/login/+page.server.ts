import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
    login:async ({ cookies, request }) => {

        const formData = await request.formData()

        const username: string = formData.get("username")?.toString() || ""
        const password: string = formData.get("password")?.toString() || ""

        if (username == "" || password == "") return { code: 400, message: "Please input both a username and a password." }
        
    }
};