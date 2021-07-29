let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultiply = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index < (numbers.length - 1)) {
    numbersMultiply.push(numbers[index] * numbers[index+1]);
  } else {
    numbersMultiply.push(numbers[index] * 2);
  }
}

console.log(numbersMultiply);

// Mesmo resultado com menos linhas