const numbers = [50, 83, -30, 3, 15];
const numbers_2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

function findLargest(array) {
  let result = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > result) result = array[i];
  }
  return result;
}

const largest = numbers.reduce((a, b) => (b > a) ? b : a);

const sumPair = numbers_2.filter((element) => element % 2 === 0).reduce((a, b) => a + b);

console.log(findLargest(numbers));
console.log(largest);
console.log(sumPair);