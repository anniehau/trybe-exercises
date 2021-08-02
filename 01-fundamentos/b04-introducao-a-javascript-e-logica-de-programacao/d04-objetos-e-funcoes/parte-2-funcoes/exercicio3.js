function maiorValor(array) {
  // O resultado muda a cada número que for menor que o anterior, e no fim retorna o que ficou.
  let result = '';
  let resultIndex = '';

  for (index in array) {
    if (result > array[index]) {
      result = array[index];
      resultIndex = index;
    }
  }
  
  return resultIndex;
}

console.log(maiorValor([2, 4, 6, 7, 10, 0, -3]));