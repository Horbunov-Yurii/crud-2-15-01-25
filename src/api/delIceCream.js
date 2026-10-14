export const delIceCream = (id) => {
    return fetch(`http://localhost:3000/iceCreams/${id}`, {
        method: "DELETE"
    }).then((res)=>res.json())

}

