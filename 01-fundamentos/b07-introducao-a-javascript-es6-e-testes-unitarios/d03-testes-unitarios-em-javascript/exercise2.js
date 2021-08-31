const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
const testArray = [1, 2, 3, 4];
const mrTest1 = myRemove(testArray, 3);
const mrTest1Result = [1, 2, 4];
const mrTest2 = myRemove([1, 2, 3, 4], 5);

assert.deepEqual(mrTest1, mrTest1Result);
assert.notDeepEqual(mrTest1, testArray);
assert.deepStrictEqual(testArray, [1, 2, 3, 4]);
assert.deepEqual(mrTest2, [1, 2, 3, 4]);

// assert.strictEqual()
// assert.deepStrictEqual()
// assert.notStrictEqual()
// assert.ok()
// assert.fail()
