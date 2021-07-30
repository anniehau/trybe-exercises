// Fazer um triangulo de asteristicos, basicamente uma escadinha
let n = 10;
let triangulo = [];

//Vamos criar cada elemento da array e colocar um asteristico dentro para cada index
for (let i = 0; i < n; i += 1) {
  triangulo.push("*");
  for (let i2 = 1; i2 < (i + 1); i2 += 1) {
    triangulo[i] += ("*");
  }
}

for (i = 0; i < n; i += 1) {
  console.log(triangulo[i]);
}