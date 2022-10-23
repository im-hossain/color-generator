import Home from "./pages/Home.svelte";
import Contact from "./pages/Contact.svelte";
import NotFound from "./pages/NotFound.svelte";
import ContactName from "./pages/ContactName.svelte";


export const routes = {
  "/": Home,
  "/contact":Contact,
  "/contact/:name":ContactName,
  "*": NotFound
};