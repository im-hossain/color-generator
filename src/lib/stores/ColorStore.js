import { writable } from 'svelte/store';

// function test() {
    
//   const { subscribe, set, update } = writable("");

//   return {
//       subscribe,
//       set: (val) => {set(val);},

//       print: (msg) => {console.log(msg)},

//       fetch: ()=>{
//         let contacts,loading;
//         try {
//           const fetchContacts = async () => {
//               const response = await fetch("http://localhost:3000/records");
//               const result = await response.json();
//               contacts = result;
//               console.log("contacts--->",contacts);
//               if (result) {
//                   loading = false;
//               }
//           };
//           fetchContacts();
//       } catch (error) {
//           console.log(error.messge);
//       }
//       load.set("false");
//       set(contacts);
//       }
//   }
// }

export const color = writable({
  title : "Random Background Color Generator",
  loading: true,
  contactFormUPloaded: false
});
