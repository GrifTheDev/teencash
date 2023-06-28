import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async ({ locals, cookies }) => {
  if (locals.sessionUser == undefined) {
    throw redirect(303, "/login");
  }
  return locals
  /* const userBalance = cookies.get("UserBalance")

  if (userBalance == undefined) throw error(500, "UserBalance cookie deleted.")
  return { userBalance, locals } */
}) satisfies PageServerLoad;
