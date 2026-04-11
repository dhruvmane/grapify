import { betterAuth } from "better-auth";
import { sveltekitCookies } from "better-auth/svelte-kit";
import { getRequestEvent } from "$app/server";

export const auth = betterAuth({
  // ... your config
  baseURL: "http://localhost:5173",
  plugins: [sveltekitCookies(getRequestEvent)], // make sure this is the last plugin in the array
});