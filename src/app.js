import { getIceCream } from "./api/getIceCream"
import { renderMarkup } from "./markup/renderMarkup"
import { postIceCream } from "./api/postIceCream"
const listRef = document.querySelector(".list")
const backdropRef = document.querySelector(".backdrop")
const btnRef = document.querySelector(".btn")
const formRef = document.querySelector(".form")


formRef.addEventListener("submit", (evt) => {
    evt.preventDefault()
    const element = evt.currentTarget.elements;
    const iceCreamData = {
        name: element.name.value,
        type: element.type.value,
      calories: element.calories.value,
      price: element.price.value,
      description: element.description.value,
      image: element.image.value
    }
    postIceCream(iceCreamData).then(res=>renderList())
    formRef.reset()
    closeModal()
})

btnRef.addEventListener("click", () => {
    openModal()
})
function openModal() {
    backdropRef.style.display = "flex"
    backdropRef.style.pointerEvents = "auto"
}

function closeModal() {
    backdropRef.style.display = "none"
}



function renderList() {
    getIceCream().then(res=>listRef.innerHTML = renderMarkup(res))
}

renderList()
