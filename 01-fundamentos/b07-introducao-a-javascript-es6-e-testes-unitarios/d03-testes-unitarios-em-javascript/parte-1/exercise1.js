const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
const sumTest1 = sum(4, 5);
assert.strictEqual(sumTest1, 9);

const sumTest2 = sum(0, 0);
assert.strictEqual(sumTest2, 0);

// sum(4, "5");
// O teste acima lança um erro 'parameters must be numbers'.
