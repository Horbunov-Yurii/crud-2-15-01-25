// export const postIceCream = (iceData) => {
//   const options = {
//     method: "POST",
//     body: JSON.stringify(iceData),
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//   };
//   return fetch("http://localhost:3000/iceCreams",options).then((res)=>res.json());
// };

export const postIceCream = async (iceData) => {
    const options = {
      method: "POST",
      body: JSON.stringify(iceData),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
  try {
      const res = await fetch("http://localhost:3000/iceCreams", options);
    if (!res.ok) {
        throw new Error("Оу ноу стався нещасний помилка детишко")
      }
    
      const data = await res.json();
    return data;
    

  } catch (error) {
    console.log(error);
    
  }
};