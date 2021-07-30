// Fazer um triangulo de asteristicos, basicamente uma escadinha
let n = 8;
let triangulo = [];

//Vamos criar cada elemento da array e colocar um asteristico dentro para cada índice, o que forma um triangulo
for (let i = 0; i < n; i += 1) {
  triangulo.push("*");
  for (let i2 = 1; i2 < (i + 1); i2 += 1) {
    triangulo[i] += ("*");
  }
}

//Imprime o triângulo
for (i = 0; i < n; i += 1) {
  console.log(triangulo[i]);
}