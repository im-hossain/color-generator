<script>
    import { createEventDispatcher } from "svelte";
    import RandomColorGeneratorTitle from "./RandomColorGeneratorTitle.svelte";
    import { color as colorStore } from "../lib/stores/ColorStore";
    const dispatch = createEventDispatcher();
    export let bgColor;
</script>

{#if $colorStore.loading}
    <p>Loading...</p>
{:else}
    <div
        on:click={() => dispatch("clickingContainer")}
        class=" border border-gray-200 {bgColor} rounded p-4 my-2 h-60 cursor-pointer "
    >
        <p class="select-none">{bgColor}</p>
    </div>
    
{/if}
<RandomColorGeneratorTitle />

<!-- In future  -->
<!-- <div class="flex justify-between mt-2">
        <button class="border px-2 bg-green-200 rounded-md" on:click={()=>dispatch("clickingPrevButton")}>Prev</button>
        <button class="border px-2 bg-green-200 rounded-md" on:click={()=>dispatch("clickingNextButton")}>Next</button>
    </div> -->
