<style>
     .lexend {
          font-family: "Lexend";
     }
</style>

<script>
     import { changeState } from "$lib/modules/functions.svelte";
     import Dhruvmane from "$lib/components/Credits/Dhruvmane.svelte";
     import Link from '$lib/assets/icons/link.svg'

</script>

<main class="h-screen bg-neutral-50">
     <div class="px-30 grid grid-cols-2 w-full h-full">
          <div class="justify-self-center bg-white py-40">
               <div class="p-10 text-center">

                    <div class="font-extrabold text-right my-2">
                         <Dhruvmane />
                    </div>

                    <h1 class="font-black uppercase text-left text-9xl">GRAPIFY</h1>
                    <p class="font-light lowercase text-3xl w-[400px]">Keep your expenses private, in check, for free, forever.</p>
               </div>

               <div class="flex px-10 justify-self-center">
                    <button class="flex text-[20px] lexend font-bold rounded-3xl text-black" onclick={() => {changeState("PROFILES")}}>
                         Get Started 
                         <img class="size-4" src={Link} alt="img">
                    </button>
               </div>

          </div>
          
          <div class="p-20"></div>

     </div>
     
</main>