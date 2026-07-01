<script lang=ts>
     import { changeState } from "$lib/modules/functions.svelte";
     import { APP } from "$lib/modules/globals.svelte";

     // Icons
     import Back from '$lib/assets/icons/back.svg'

     let _available_profiles = APP._AVAILABLE_PROFILES

     function chooseProfile(id: string) {
          APP._ACTIVE_PROFILE = APP._AVAILABLE_PROFILES?.find(profile => profile.id === id);
          changeState("MAIN");
     }

</script>

<main class="h-screen text-center dark:text-white p-10 flex flex-col">

     <!-- Window Title -->
     <div class="flex text-neutral-700">
          <button onclick={() => {changeState("INTRO")}} class="rounded-4xl">
               <img alt="back" src={Back} class="size-13 p-2 hover:scale-105">
          </button>

          <h1 class="py-5 translate-y-0.5 px-3 uppercase font-bold text-3xl">Your Profiles</h1>
          <button class="uppercase p-2" onclick={() => {changeState("CREATE_PROFILE")}}>Create</button>
     </div>

     <div class="grid grid-cols-4 mx-10 p-30 gap-3">
          {#each _available_profiles as profile}
               <button class="rounded bg-neutral-100 p-3 h-[200px]" onclick={() => chooseProfile(profile.id)}>
                    <h1>{profile.name}</h1>
                    <p>{profile.description}</p>
               </button>
          {/each}
     </div>
</main>