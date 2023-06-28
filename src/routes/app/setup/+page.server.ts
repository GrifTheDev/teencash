import { redirect, error, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async ({ locals, cookies }) => {
  if (locals.sessionUser == undefined) {
    throw redirect(303, "/login");
  }

  const requiresSetup = cookies.get("RequiresSetup");

  if (requiresSetup == "false" || requiresSetup == undefined) {
    throw redirect(303, "/app")
  }
  /* const balanceData = {
    balance: 0,
    currency: "eur"
  }

  const balDocRef = doc(db, "balances", userid)

  await setDoc(balDocRef, balanceData)

  cookies.set("UserBalance", "0 eur", {
    httpOnly: true,
    secure: true,
    path: "/",
    sameSite: "strict",
  }) */

}) satisfies PageServerLoad;

export const actions = {
  setup: (async ({request, cookies}) => {
      /* const formData = await request.formData()

      const money = Number(formData.get("balance")) || -1
      const currency = formData.get("currency")

      if (money < 0) return { code: 400, message: "Please specify a positive amount of money to add to the master balance." }

      console.log(money, currency) */

      return { code: 500, message: "This is an error" }
  })
} satisfies Actions