const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const liArray = [];
ingredients.forEach(elm => {
  const item = document.createElement('li');
  item.textContent = elm;
  item.classList.add('item');
  liArray.push(item);
})

const list = document.querySelector('#ingredients');
list.append(...liArray)