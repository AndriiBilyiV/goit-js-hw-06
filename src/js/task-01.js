const tagLi = document.querySelectorAll(".item");
const countLi = [...tagLi].length;
console.log('Number of categories:', countLi)

tagLi.forEach(
    elm =>
    console.log
        ('Category:', elm.querySelector('h2').textContent,
        '\n', 'Elements:', [...elm.querySelectorAll('li')].length)
)

