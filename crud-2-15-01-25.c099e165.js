let e=document.querySelector(".list"),t=document.querySelector(".backdrop"),n=document.querySelector(".btn"),i=document.querySelector(".form");function a(){fetch("http://localhost:3000/iceCreams").then(e=>e.json()).then(t=>e.innerHTML=t.map(({id:e,name:t,type:n,calories:i,price:a,description:o,image:l})=>`
        <li id="${e}" class="item">
            <img src="${l}" alt="${o}">
            <h2>${t}</h2>
            <p>${n}</p>
            <p>${i}</p>
            <p>${o}</p>
            <p>${a}</p>
            <button data-action="edit" type="button" class="edit">edit</button>
            <button data-action="delete" type="button" class="delete">delete</button>
        </li>`).join(""))}i.addEventListener("submit",e=>{e.preventDefault();let n=e.currentTarget.elements;fetch("http://localhost:3000/iceCreams",{method:"POST",body:JSON.stringify({name:n.name.value,type:n.type.value,calories:n.calories.value,price:n.price.value,description:n.description.value,image:n.image.value}),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(e=>a()),i.reset(),t.style.display="none"}),n.addEventListener("click",()=>{t.style.display="flex",t.style.pointerEvents="auto"}),a();
//# sourceMappingURL=crud-2-15-01-25.c099e165.js.map
