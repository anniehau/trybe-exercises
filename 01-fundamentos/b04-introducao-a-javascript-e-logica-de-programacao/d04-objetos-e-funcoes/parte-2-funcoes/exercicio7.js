function checkWordEnd(word,end) {
  // Para checar se o final da word é a mesma coisa que a string de end, eu preciso usar .length para ver o tamanho de end, e depois checar o tamanho de word - wordEnd. Após isso, analizar cada letra. Vou precisar de um for para isso.

  let result = false;

  for (i = word.length - end.length; i < word.length; i += 1) {
    if (word[i] === end[i-(word.length - end.length)]) {
      result = true;
    } else {
      result = false;
      break;
    }
  }

  return result;
}

console.log(checkWordEnd('trybe', 'be'))