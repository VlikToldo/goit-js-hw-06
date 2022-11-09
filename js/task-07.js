const refs = {
    inputRangeEl: document.getElementById('font-size-control'),
    textEl: document.getElementById('text')
}

console.log(refs.textEl);

refs.inputRangeEl.addEventListener('input', rangeValue);

function rangeValue (e) {
    refs.textEl.style.fontSize = `${e.currentTarget.value}px`;
}

