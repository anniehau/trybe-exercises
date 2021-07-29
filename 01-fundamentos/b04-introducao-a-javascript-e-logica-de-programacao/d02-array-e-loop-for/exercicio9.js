let numbers = [];
let divide = [];

for (i = 1; i <= 25; i += 1) {
  numbers.push(i)
}

for (i2 = 0; i2 < numbers.length; i2 += 1) {
  divide.push(numbers[i2] / 2)
}

console.log(divide);