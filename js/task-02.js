const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients');


const liEl = ingredients.map(elem => {
  let createEl = document.createElement('li');
  createEl.textContent = elem;
  createEl.classList.add("item");
  return createEl;
  });

  listEl.append(...liEl);



