<script>
    import {link} from "svelte-spa-router"
</script>

<ul class="list-none flex mb-2 justify-center bg-purple-100 p-2">
    <li class="border-r-2 pr-2"><a href="/" use:link>Home</a></li>
    <li class="ml-2"><a href="/contact" use:link>Contact</a></li>
</ul>