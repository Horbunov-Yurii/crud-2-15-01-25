import { getIceCream } from "./api/getIceCream";
import { renderMarkup } from "./markup/renderMarkup";
import { postIceCream } from "./api/postIceCream";
import { delIceCream } from "./api/delIceCream";
import { updateIceCream } from "./api/updateIceCream";

const listRef = document.querySelector(".list");
const backdropRef = document.querySelector(".backdrop");
const btnRef = document.querySelector(".btn");
const formRef = document.querySelector(".form");

let currentId = null;

listRef.addEventListener("click", async (evt) => {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }
  const action = evt.target.dataset.action;
  const li = evt.target.closest("li");
  const id = li.id;
  if (action === "delete") {
    // delIceCream(id).then((res) => renderList());
    await delIceCream(id);
    renderList();
    return;
  }
  if (action === "edit") {
    currentId = id;
    openModal();
    formRef.elements.image.value = li.querySelector("img").src;
    formRef.elements.name.value = li.querySelector("h2").textContent;
    formRef.elements.description.value = li.querySelector(".description").textContent;
    formRef.elements.calories.value = li.querySelector(".calories").textContent;
    formRef.elements.price.value = li.querySelector(".price").textContent;
    formRef.elements.type.value = li.querySelector(".type").textContent;
  }
});

formRef.addEventListener("submit", async (evt) => {
  evt.preventDefault();
  const element = evt.currentTarget.elements;
  const iceCreamData = {
    name: element.name.value,
    type: element.type.value,
    calories: element.calories.value,
    price: element.price.value,
    description: element.description.value,
    image: element.image.value,
  };
  if (currentId === null) {
    // postIceCream(iceCreamData).then((res) => renderList());
    await postIceCream(iceCreamData);
afterRender()
    return;
  }
  // updateIceCream(iceCreamData, currentId).then((res) => renderList());
  await updateIceCream(iceCreamData, currentId);
afterRender()
  currentId = null;
});

btnRef.addEventListener("click", () => {
  openModal();
});
function openModal() {
  backdropRef.style.display = "flex";
  backdropRef.style.pointerEvents = "auto";
}

function closeModal() {
  backdropRef.style.display = "none";
}

async function renderList() {
  // getIceCream().then((res) => (listRef.innerHTML = renderMarkup(res)));
  const res = await getIceCream();
  listRef.innerHTML = renderMarkup(res);
}

function afterRender() {
      renderList();
      closeModal();
      formRef.reset();
}

renderList();
