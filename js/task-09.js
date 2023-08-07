function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector('.change-color');
btn.addEventListener('click', () => {
  const currentColor = getRandomHexColor();
  document.querySelector('body').style.backgroundColor = currentColor;
  document.querySelector('.color').textContent = currentColor;
})