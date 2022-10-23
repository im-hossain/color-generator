<script>
    async function fetchTodos() {
        const result = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        const data = await result.json();
        return data;
    }
    const response = fetchTodos();
</script>

<div>
    {#await response}
        <p>loading...</p>    
    {:then data}
        <p>{JSON.stringify(data)}</p>
    {:catch} 
        <p>error</p>
    {/await}
</div> 
