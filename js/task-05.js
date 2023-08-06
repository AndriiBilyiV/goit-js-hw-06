const input = document.querySelector('#name-input');
const greeting = document.querySelector('#name-output');

const setText = () => {
    if (input.value !== '') {
        greeting.textContent = input.value;
    } else {
        greeting.textContent = "Anonymous"
    }
}

input.addEventListener('input', setText);