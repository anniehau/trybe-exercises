let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultiply = [];

for (let index = 1; index <= numbers.length; index += 1) {
  for (let secIndex = 0; secIndex < index; secIndex += 1) {
    if (secIndex === (index - 1)) {
      if (secIndex === (numbers.length - 1)) {
        numbersMultiply.push(numbers[secIndex] * 2);
      } else {
        numbersMultiply.push(numbers[index] * numbers[secIndex]);
      }
    }
  }
}

console.log(numbersMultiply);