// 1 - Factorial

function numberFactorial(number) {
  let factorial = number;

  for (let index = number - 1; index > 0; index -= 1) {
    factorial = factorial * index;
  }

  return `O fatorial de ${number} é ${factorial}!`;
}

console.log(numberFactorial(6));

// 2 - Maior palavra

function largestWord(string) {
  const wordArray = string.split(' ');
  let chosenWord = wordArray[0];

  for (let index = 0; index < wordArray.length; index += 1) {
    const checkWordLength = (wordArray[index].length > chosenWord.length) ? chosenWord = wordArray[index] : '';
  }

  return `A maior palavra da frase é "${chosenWord}".`;
}

console.log(largestWord('Qual é a maior palavra dessa frase que eu fiz?'))

// 3 - Está no index.html e script.js (botão count)

// 4 - Retornar frase com nome da pessoa e habilidades

const array = ['Bash', 'Git', 'HTML', 'CSS', 'JavaScript']

function buildPhrase(name) {
  const buildString = () => `Oi, meu nome é ${name}!`
  let result = `${buildString()}
 
Minhas cinco habilidades são:`;

  array.forEach((element) => 
  result += `
- ${element}`
  );

  return result += `

Prazer em te conhecer!`;
}

console.log(buildPhrase('Annie'));