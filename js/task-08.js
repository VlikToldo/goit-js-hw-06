
const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit)

function handleSubmit (e) {
    e.preventDefault();

    const {
        elements: { email, password }
    } = e.currentTarget;
    
    if (email.value === "" || password.value === "") {
        alert('Please, fill in all fields')
    };
  
    const data = {
        email: email.value,
        password: password.value,
    };

    console.log(data);
    e.currentTarget.reset();
}
