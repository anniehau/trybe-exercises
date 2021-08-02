function mostRepeats(array) {
  let repeats = 0;
  let result = 0;

  // O objetivo vai ser criar dois fors que fazem a conversa: para cada elemento da array, vamos checar todos os elementos dentro dela e ver quantas vezes foi repetido. No final, ele vai comparar a repetição atual contra um resultado. Se o resultado for menor, a repetição atual se torna o resultado.
  for (element in array) {
    let preliminaryRepeats = 0;
    for (number of array) {
      if (number === array[element]) {
        preliminaryRepeats++;
      }
      if (preliminaryRepeats > repeats) {
        repeats = preliminaryRepeats;
        result = array[element];
      }
    }
  }
  return result;
}

console.log(mostRepeats([2, 3, 2, 5, 8, 2, 3]))