<script lang=ts>
     import { APP } from "$lib/modules/globals.svelte";
     import { changeState } from "$lib/modules/functions.svelte";
     // Icons
     import Back from '$lib/assets/icons/back.svg'

     let profileData = APP._ACTIVE_PROFILE
</script>

<main class="p-10">
     <!-- Window Title -->
     <div class="flex text-neutral-700">
          <button onclick={() => {changeState("PROFILES")}} class="rounded-4xl">
               <img alt="back" src={Back} class="size-13 p-2 hover:scale-105">
          </button>

          <h1 class="py-5 translate-y-0.5 px-3 uppercase font-bold text-3xl">{profileData?.name}</h1>
          <button class="uppercase p-2" onclick={() => {}}>{profileData?.description}</button>
     </div>

     <!-- BALANCE -->
     <div class="bg-neutral-50 p-15 rounded-4xl">
          <h1 class="text-9xl">$3,000</h1>
     </div>

</main>