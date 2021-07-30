let numbers = [];
let divide = [];

for (i = 1; i <= 25; i += 1) {
  numbers.push(i)
}

for (i = 0; i < numbers.length; i += 1) {
  divide.push(numbers[i] / 2)
}

console.log(divide);