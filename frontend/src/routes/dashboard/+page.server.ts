// src/routes/dashboard/+page.server.ts
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => {
  const { userId } = locals.auth();

  if (!userId) {
    return redirect(307, '/');
  }

  return { userId };
};