// export const delIceCream = (id) => {
//     return fetch(`http://localhost:3000/iceCreams/${id}`, {
//         method: "DELETE"
//     }).then((res)=>res.json())

// }

export const delIceCream = async(id) => {
    const res = await fetch(`http://localhost:3000/iceCreams/${id}`, {
        method: "DELETE",
    });
    const data = await res.json();
    return data 
};
