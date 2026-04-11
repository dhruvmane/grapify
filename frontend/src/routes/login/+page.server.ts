import { redirect } from "@sveltejs/kit";
export function load() {
    redirect(307, 'https://poetic-pup-38.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A5173%2Fdashboard')
}