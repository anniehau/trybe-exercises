// Fazer uma pirâmide de asteriscos
let n = 5;
let triangulo = [];

//Cria a pirâmide usando dois fors: um para o lado esquerdo e outro para o direito
for (let i = 0; i < n; i += 1) {
  triangulo.push("");
  for (let i2 = n - 1; i2 >= 0; i2 -= 1) {
    if (i2 <= i) {
      triangulo[i] += ("*");
    } else {
      triangulo[i] += (" ");
    }
  }
  for (let i3 = 1; i3 < (i + 1); i3 += 1) {
    triangulo[i] += ("*");
  }
}

//Imprime a pirâmide
console.log("Abaixo está uma pirâmide, do número de sua escolha :D");
for (i = 0; i < n; i += 1) {
  console.log(triangulo[i]);
}