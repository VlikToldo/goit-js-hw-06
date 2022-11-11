function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
 colorTextEl: document.querySelector('.color'),
 btnChangeColor: document.querySelector('.change-color'),
 bodyEl: document.querySelector('body'),
}

refs.btnChangeColor.addEventListener('click', changeColor)

function changeColor (e) {
  const color = getRandomHexColor();
  refs.colorTextEl.textContent = color;
  refs.bodyEl.style.backgroundColor = color;
}


