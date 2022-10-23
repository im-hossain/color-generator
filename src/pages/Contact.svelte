<script>
    import ContactList from "../components/ContactList.svelte";
    import ContactForm from "../components/ContactForm.svelte";
    import OldFetch from "../components/OldFetch.svelte";
    import NewFetch from "../components/NewFetch.svelte";
</script>

<!-- <a href="/contact/imran" use:link>Go to the contact page with params</a> -->

<section>
    <h4 class="text-center font-bold text-rose-400 mb-2">Contact form</h4>
    <div class="grid grid-cols-2 divide-x-4 my-8">
        <div class="flex flex-col">
            <ContactForm />
            <!-- <OldFetch /> -->
            <!-- <NewFetch/> -->
        </div>
        <ContactList />
    </div>
</section>
