import { writable } from 'svelte/store'
export const contacts = writable([])
export const contactsLoading = writable(true)
export const contactsError = writable("")

const apiUrl = "http://localhost:3000/records"

const fetchItems = async () => {
	try {
		contactsLoading.set(true)
		const response = await fetch(apiUrl);
		const result = await response.json();
		contacts.set(result);
		contactsLoading.set(false);
	} catch (error) {
		contactsError.set(error)

	}
}
fetchItems()