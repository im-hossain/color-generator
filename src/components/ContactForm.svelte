<script>
    import { contacts } from "../lib/stores/ContactStore";


	// import { contactStore } from "../lib/stores/ContactStore.js";
    let name, dob, image;
    
    
    const onFileSelected = (e) => {
        image = e.target.files[0];
    };
    const handleSubmit = async () => {
        if (!image) {
            alert("image is required!");
            return;
        }
        
        const dataArray = new FormData();
        dataArray.append("image", image);
        dataArray.append("name", name);
        dataArray.append("dob", dob);
        try {
            const rawResponse = await fetch("http://localhost:3000/records", {
                method: "POST",
                body: dataArray,
            });
            const content = await rawResponse.json();
            alert("data insert success!");
            // if(content){
            $contacts = [...$contacts, {name, image:URL.createObjectURL(image), dob}]
            // }
            
        } catch (error) {
            alert(error.message);
        }
    };
</script>

<form
    class="flex flex-col items-center space-y-2 "
    on:submit={handleSubmit}
    enctype="multipart/form-data"
>
    <div class="flex flex-col justify-start w-2/4">
        <label class="mb-1 " for="name">Your name</label>
        <input
            type="text"
            bind:value={name}
            placeholder="your name"
            class=" border p-2"
            required
        />
    </div>
    <div class="flex flex-col justify-start w-2/4">
        <label class="mb-1 " for="image">Your image</label>
        <input
            type="file"
            accept=".jpg, .jpeg, .png"
            on:change={(e) => onFileSelected(e)}
        />
    </div>
    <div class="flex flex-col justify-start w-2/4">
        <label class="mb-1 " for="dob">Your date of birth</label>
        <input type="date" bind:value={dob} class="border p-2 " required />
    </div>

    <button type="submit" class="border p-2 px-4 bg-rose-200 rounded ">
        submit
    </button>
</form>
