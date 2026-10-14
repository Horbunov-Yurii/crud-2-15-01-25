export function renderMarkup(itms) {
  const item = itms.map(
    ({ id, name, type, calories, price, description, image }) => {
          return `
        <li id="${id}" class="item">
            <img src="${image}" alt="${description}">
            <h2>${name}</h2>
            <p class="type">${type}</p>
            <p  class="calories">${calories}</p>
            <p class="description">${description}</p>
            <p class="price">${price}</p>
            <button data-action="edit" type="button" class="edit">edit</button>
            <button data-action="delete" type="button" class="delete">delete</button>
        </li>`;
    },
    ).join("");
    return item
}
