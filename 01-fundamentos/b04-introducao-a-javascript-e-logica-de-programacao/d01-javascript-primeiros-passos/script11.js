let salario = 1500.10;

if (salario <= 1556.94) {
  salario = salario * 0.92;
} else if (salario >= 1556.95 && salario <= 2594.92) {
  salario = salario * 0.91;
} else if (salario >= 2594.93 && salario <= 5189.82) {
  salario = salario * 0.89;
} else if (salario > 5189.82) {
  salario = salario - 570.88;
}

if (salario >= 1903.99 && salario <= 2826.65) {
  salario = salario - ((salario * 0.075) - 142.80);
} else if (salario >= 2826.66 && salario <= 3751.05) {
  salario = salario - ((salario * 0.15) - 354.80);
} if (salario >= 3751.06 && salario <= 4664.68) {
  salario = salario - ((salario * 0.22) - 636.13); //
} else if (salario > 4664.68) {
  salario = salario - ((salario * 0.275) - 869.36); //
}

console.log(salario);