<svelte:head>
     <title>grapify</title>
</svelte:head>

<script>
     import { APP } from "$lib/modules/globals.svelte";
     import CreateProfile from "$lib/pages/CreateProfile.svelte";
     import Intro from "$lib/pages/Intro.svelte";
     import Main from "$lib/pages/Main.svelte";
     import Profiles from "$lib/pages/Profiles.svelte";
</script>

<main>
     {#if APP._STATE === "INTRO"}
          <Intro />
     {:else if APP._STATE === "PROFILES"}
          <Profiles />
     {:else if APP._STATE === "MAIN"}
          <Main />
     {:else if APP._STATE === "CREATE_PROFILE"}
          <CreateProfile />
     {/if}
</main>