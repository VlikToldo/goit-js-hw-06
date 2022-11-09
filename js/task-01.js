const itemElLength = categories.querySelectorAll('.item').length;
console.log("Number of categories:", itemElLength);
const itemEl = document.querySelectorAll('.item');
itemEl.forEach(elem => {
    console.log('Categories:', elem.firstElementChild.textContent)
    console.log('Elements:', elem.lastElementChild.children.length);
});












