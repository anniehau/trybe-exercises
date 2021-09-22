let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let divide = 0;
let result = 0;

for (i = 0; i < numbers.length; i += 1) {
  divide = numbers[i] % 2;
  if (divide === 1) {
    result += 1;
  }
}

if (result >= 1) {
  console.log("Numeros Ímpares:", result);
} else {
  console.log("nenhum valor ímpar encontrado");
}