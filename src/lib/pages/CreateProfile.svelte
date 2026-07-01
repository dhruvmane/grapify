<script lang=ts>
     import { APP } from "$lib/modules/globals.svelte";
     import { createProfile, changeState } from "$lib/modules/functions.svelte";

     let profileData = {
          id: crypto.randomUUID(),
          name: "",
          description: "",
          creationDate: new Date().getTime()
     }

</script>

<main>
     <div>
          <h1>Enter Name</h1>
          <input bind:value={profileData.name}>
          <h1>Enter Description</h1>
          <input bind:value={profileData.description}>
          <button aria-label="1" onclick={() => {createProfile(profileData); changeState("PROFILES") }}>Create</button>
     </div>
</main>