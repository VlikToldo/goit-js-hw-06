function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
 colorTextEl: document.querySelector('.color'),
 btnChangeColor: document.querySelector('.change-color'),
 bodyEl: document.querySelector('body'),
}

refs.btnChangeColor.addEventListener('click', changeColor)

function changeColor () {
  refs.colorTextEl.textContent = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
}


