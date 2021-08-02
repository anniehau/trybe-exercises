function mostCharacters(stringArray) {
  let largest = '';

  for (word of stringArray) {
    if (largest.length < word.length) {
      largest = word;
    }
  }

  return largest;
}

console.log(mostCharacters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))