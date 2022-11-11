const inputEl = document.getElementById("validation-input");

inputEl.addEventListener('blur', correctLength);
function correctLength (e) {
    if ( inputEl.value.length == inputEl.dataset.length) {

        e.currentTarget.classList.remove('invalid')
        e.currentTarget.classList.add('valid')
    } else {
        e.currentTarget.classList.remove('valid')
        e.currentTarget.classList.add('invalid')
    }
}
