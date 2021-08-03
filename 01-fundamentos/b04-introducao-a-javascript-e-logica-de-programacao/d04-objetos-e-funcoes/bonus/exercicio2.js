function arrayOfNumbers(vector) {
  // Retornar apenas os números pares.
  let result = [];
  let array = [];
  let num = 0;

  for (i = 0; i < vector.length; i++) {
    array = array.concat(vector[i]);
    console.log(array)
  }

  for (i = 0; i < array.length; i++) {
    num = array[i] % 2;
    if (num === 0) {
      result.push(array[i]);
    } 
  }

  return result;
}

console.log(arrayOfNumbers(([[1, 2], [3,4,5,6], [7,8,9,10]])))