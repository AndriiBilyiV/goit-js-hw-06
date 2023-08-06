let counterValue = 0;
const counter = document.querySelector('#value');


const plusOne = () => {
    counterValue += 1;
    counter.textContent = counterValue; 
};
const minusOne = () => {
    counterValue -= 1;
    counter.textContent = counterValue; 
}

const btnPlus = document.querySelector('button[data-action="increment"]');
const btnMinus = document.querySelector('button[data-action="decrement"]');

btnPlus.addEventListener('click', plusOne);
btnMinus.addEventListener('click', minusOne);

