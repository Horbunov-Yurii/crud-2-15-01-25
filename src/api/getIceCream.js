export const getIceCream = () => {
    return fetch("http://localhost:3000/iceCreams").then((res)=>res.json())
}