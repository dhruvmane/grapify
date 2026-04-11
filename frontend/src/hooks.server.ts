import { building } from "$app/environment";
import { withClerkHandler } from 'svelte-clerk/server';

export const handle = withClerkHandler();

