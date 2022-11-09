const refs = {
    inputText: document.getElementById("name-input"),
    outputText: document.getElementById("name-output")
}



refs.inputText.addEventListener('input', outputTextShow);

function outputTextShow (event) {
    if (refs.inputText.value.length !== 0) {
        refs.outputText.textContent = event.currentTarget.value;
    } else {
        refs.outputText.textContent = "Anonymous";
    }
    }
