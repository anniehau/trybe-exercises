function numberFactorial(number) {
  let factorial = number;

  for (let index = number - 1; index > 0; index -= 1) {
    factorial = factorial * index;
  }

  return `O fatorial de ${number} é ${factorial}!`;
}

console.log(numberFactorial(6));