function numberFactorial(number) {
  let factorial = number;

  for (let index = number - 1; index > 0; index -= 1) {
    factorial = factorial * index;
  }

  return `O fatorial de ${number} é ${factorial}!`;
}

console.log(numberFactorial(6));

function largestWord(string) {
  const wordArray = string.split(' ');
  let chosenWord = wordArray[0];

  for (let index = 0; index < wordArray.length; index += 1) {
    const checkWordLength = (wordArray[index].length > chosenWord.length) ? chosenWord = wordArray[index] : '';
  }

  return chosenWord;
}

console.log(largestWord('Qual é a maior palavra dessa frase que eu fiz?'))