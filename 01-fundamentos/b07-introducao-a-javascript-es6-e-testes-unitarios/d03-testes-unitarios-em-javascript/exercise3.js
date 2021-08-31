const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
const actualArray = myRemoveWithoutCopy([1, 2, 3, 4], 3);
const actualArrayNoChanges = myRemoveWithoutCopy([1, 2, 3, 4], 5);
let testArray = [1, 2, 3, 4];

myRemoveWithoutCopy(testArray, 3);

assert.deepStrictEqual(actualArray, [1, 2, 4]);
assert.notDeepStrictEqual(actualArray, [1, 2, 3, 4]);
assert.deepStrictEqual(testArray, [1, 2, 4]);
assert.deepStrictEqual(actualArrayNoChanges, [1, 2, 3, 4]);
