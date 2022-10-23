export default async function getData(api){
    const response = await fetch(api)
    const data = await response.json()
    return data
}