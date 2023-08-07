function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const count = document.querySelector('#controls').firstElementChild;
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const divBox = document.querySelector('#boxes');

let width = 30;
let height = 30;

function createBoxes(amount) {
  const divs = [];
  for (let i = 1; i <= amount; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.style.width = `${width}px`;
    newDiv.style.height = `${height}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    divs.push(newDiv);
    width += 10;
    height += 10;
  }
  divBox.append(...divs);
}
  
createBtn.addEventListener('click', () => {
  const amount = count.value;
  createBoxes(amount)
})
destroyBtn.addEventListener('click', () => {
  divBox.innerHTML = ''
  width = 30;
  height = 30;
})