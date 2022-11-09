const inputEl = document.getElementById("validation-input");

inputEl.addEventListener('blur', correctLength);

function correctLength (e) {
    if ( e.currentTarget.value.length = e.currentTarget.dataset.length) {

        e.currentTarget.classList.remove('valid')
        e.currentTarget.classList.add('invalid')
    } else {
        
        e.currentTarget.classList.remove('invalid')
        e.currentTarget.classList.add('valid')
    }
   
};
