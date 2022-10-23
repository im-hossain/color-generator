<script>
    import getData from "../lib/functions/getData";
    let response = getData("https://jsonplaceholder.typicode.com/todos/1");
</script>

{#await response}
    <!-- response is pending -->
    <p>loading...</p>
{:then value}
    <!-- response was fulfilled -->
    <p>{JSON.stringify(value)}</p>
{:catch error}
    <!-- response was rejected -->
    <p>{error}</p>
{/await}
