// export const updateIceCream = (iceData, id) => {
//   const options = {
//     method: "PUT",
//     body: JSON.stringify(iceData),
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//   };
//   return fetch(`http://localhost:3000/iceCreams/${id}`,options).then((res)=>res.json());
// };

export const updateIceCream = async(iceData, id) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(iceData),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  try {
    const res = await fetch(`http://localhost:3000/iceCreams/${id}`, options)
    if (!res.ok) {
      throw new Error("Оу ноу стався нещасний помилка детишко");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    
  }
};
