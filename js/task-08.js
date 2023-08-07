const form = document.querySelector('.login-form');

const { email, password } = form.elements;

form.addEventListener('submit', (evn) => {
    evn.preventDefault();
    if (email.value === '' || password.value === '') {
        alert('Помилка! Необхідно заповнити всі поля')
    } else {
        const values = {
            email: email.value,
            password: password.value
        }
        console.log(values);
        form.reset();
    }
})
