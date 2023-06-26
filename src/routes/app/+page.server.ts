import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async ({ locals }) => {
  if (locals.sessionUser == undefined) {
    throw redirect(303, "/login");
  }
  return locals
}) satisfies PageServerLoad;
