import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
  const { userId, sessionId, orgId } = locals.auth();

  if (!userId) {
    return redirect(307, '/login');
  }

  return { userId };
};