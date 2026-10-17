// export const getIceCream = () => {
//     return fetch("http://localhost:3000/iceCreams").then((res)=>res.json())
// }
export const getIceCream = async () => {
    try {
        const res = await fetch("http://localhost:3000/iceCreams");
        if (res.status !== 200) {
            throw new Error("Оу ноу сталася помилка детишко");
        }
        const data = await res.json();
        return data
    } catch (err) {
        console.log(err.message);
    }
};