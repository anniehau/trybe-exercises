function sumOf(n) {
  // Preciso fazer um for que começa no 1, e vai passando por cada número até chegar no número atual e somando eles, adicionando na variável dentro da função.

  let result = 0;

  for (let i = 0; i <= n; i += 1) {
    result += i;
  }

  return result;
}

console.log(sumOf(5))