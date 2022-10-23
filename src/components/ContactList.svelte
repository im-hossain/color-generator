<script>
    import {
        contacts,
        contactsError,
        contactsLoading,
    } from "../lib/stores/ContactStore.js";
</script>

<div class=" pl-16 grid grid-cols-2 gap-8 ">
    {#if $contactsLoading}
        <p>loading...</p>
    {:else if $contactsError}
        <p>{contactsError}</p>
    {:else}
        {#each $contacts as { name, image, dob } (image)}
            <div
                class="flex space-x-4 justify-center items-center border border-gray-100 p-2 rounded-md"
            >
                <div class="flex flex-col">
                    <h4><span class="text-rose-400">Name:</span> {name}</h4>
                    <h6>
                        <span class="text-rose-400">Date of Birth:</span>
                        {dob}
                    </h6>
                </div>

                <img
                    src={image}
                    alt="user"
                    class="object-cover w-16 h-16 rounded-full "
                />
            </div>
        {/each}
    {/if}
</div>
