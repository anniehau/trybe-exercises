function maiorValor(array) {
  // O resultado muda a cada número que for maior que o anterior, e no fim retorna o que ficou.
  let result = '';
  let resultIndex = '';

  for (index in array) {
    if (result < array[index]) {
      result = array[index];;
      resultIndex = index;
    }
  }
  
  return resultIndex;
}

console.log(maiorValor([2, 3, 6, 7, 10, 1]))

// Observação: for of não funcionou, não sei porque. Teria que testar no debugger.
// Obs #2: Acho que porque o of retorna o número e não o index em si. Então retornou o index 3 (7) que é o maior número da propriedade do array que tinha. Se tivesse um 4 dentro do array, por exemplo, retornaria 10.