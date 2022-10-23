<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    import Icon from "../assets/icons/plus.svg";
    import { color as colorStore } from "../lib/stores/ColorStore.js";
    export let bgColor, colors;
</script>

{#if $colorStore.loading}
    <p>Loading...</p>
{:else}
    <div class="my-4 border border-pink-200 p-2">
        <label for="" class="text-left {bgColor}  rounded select-none">
            Select Color Range:</label
        >
        <div class="pl-16 py-2">
            {#each colors as color}
                <input type="checkbox" bind:checked={color.checked} />
                {color.color} <br />
            {/each}
        </div>
        <div
            on:click={() => dispatch("selectingCheckBox")}
            class=" flex border rounded border-gray-200 ml-16 p-2 bg-green-100 w-48 space-x-2"
        >
            <img src={Icon} alt="plus icon" />
            <button>Add color range</button>
        </div>
    </div>
{/if}
