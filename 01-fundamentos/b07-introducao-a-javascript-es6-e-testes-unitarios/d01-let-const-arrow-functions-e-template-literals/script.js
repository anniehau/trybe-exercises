const button = document.querySelector('button');
const p = document.querySelector('p');
let clickCount = 0;

const addClick = () => {
  clickCount += 1;
  p.innerText = clickCount;
}

button.addEventListener('click', addClick);