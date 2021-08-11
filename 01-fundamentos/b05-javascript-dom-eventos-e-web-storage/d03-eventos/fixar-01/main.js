const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');
const element = document.getElementsByClassName('tech');
const activeElement = document.querySelector('.tech');

/*
1. Copie esse arquivo e edite apenas ele;

2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';

4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio?

5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

function addClass(event) {
  for (let i = 0; i < element.length; i++) {
    element[i].classList.remove('tech')
  }
  event.target.classList.add('tech')

  if (event.target === firstLi) {
    input.placeholder = 'Alterar a primeira tecnologia';
  } else if (event.target === secondLi) {
    input.placeholder = 'Alterar a segunda tecnologia';
  } else if (event.target === thirdLi) {
    input.placeholder = 'Alterar a terceira tecnologia';
  };
}

function changeText(event) {
  document.querySelector('.tech').innerText = input.value;
  console.log(event.target)
  input.value = "";
}

function redirect() {
  window.open("https://www.trybe.com");
}

function changeColor(event) {
  event.target.style = 'color: #2fc18c';
}

firstLi.addEventListener('click', addClass);
secondLi.addEventListener('click', addClass);
thirdLi.addEventListener('click', addClass);

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);

input.addEventListener('change', changeText);

myWebpage.addEventListener('dblclick', redirect);

myWebpage.addEventListener('mouseover', changeColor)

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.