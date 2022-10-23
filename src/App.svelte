<script>
	import Router, { link } from "svelte-spa-router";
    import NavBar from "./components/NavBar.svelte";
	import { routes } from "./routes.js";
</script>

<div>
	<NavBar/>
	<Router {routes} />
</div>
