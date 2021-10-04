let num = 29;
let isPrime = true;

// Faz uma divisão com cada número e faz a pergunta: o resultado da divisão com numeros que não são o mesmo número que o mesmo é integro? Se for, então não é primo. Se não for, é primo.
for (i = 2; i < num; i += 1) {
  if (Number.isInteger(num / i) && i != num) {
    isPrime = false;
  }
}

if (isPrime === true) {
  console.log("O número",num,"é primo.");
} else {
  console.log("O número",num,"não é primo.");
}