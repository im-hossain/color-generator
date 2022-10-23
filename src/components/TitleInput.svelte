<script>
    export let bgColor;
    import {color} from '../lib/stores/ColorStore.js'
</script>
<div class="border border-purple-200 p-2">
    <label for="" class="text-left {bgColor} p-2 rounded select-none">
        Title:</label
    >
    <input
        type="text"
        placeholder="type to change the button title"
        bind:value={$color.title}
        class="w-2/4 border rounded-md p-2 border-gray-400"
    />
</div>