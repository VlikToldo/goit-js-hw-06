
const refs = {
    countValue: document.getElementById("value"),
    btnDecrement:  document.querySelector('[ data-action="decrement"]'),
    btnIncrement: document.querySelector('[data-action="increment"]'),
}



refs.btnIncrement.addEventListener('click', onCountIncrement );
refs.btnDecrement.addEventListener('click', onCountDecrement );

let counterValue = 0;

function onCountIncrement () {
  refs.countValue.textContent = counterValue += 1;
}

function onCountDecrement () {
   refs.countValue.textContent = counterValue -= 1;
}