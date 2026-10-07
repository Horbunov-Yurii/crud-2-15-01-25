export function renderMarkup(itms) {
  const item = itms.map(
    ({ id, name, type, calories, price, description, image }) => {
          return `
        <li id="${id}" class="item">
            <img src="${image}" alt="${description}">
            <h2>${name}</h2>
            <p>${type}</p>
            <p>${calories}</p>
            <p>${description}</p>
            <p>${price}</p>
            <button data-action="edit" type="button" class="edit">edit</button>
            <button data-action="delete" type="button" class="delete">delete</button>
        </li>`;
    },
    ).join("");
    return item
}
