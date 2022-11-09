const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let listEl = document.querySelector('#ingredients')


ingredients.forEach(elem => {
  let createEl = document.createElement('li');
  createEl.textContent = elem;
  createEl.classList.add("item")
  listEl.append(createEl);
  });





