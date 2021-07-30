// Fazer um triangulo de asteristicos, basicamente uma escadinha, só que invertida dessa vez
let n = 6;
let triangulo = [];

//Vamos criar cada elemento vazio para cada array. O loop sempre irá adicionar um espaço vazio, a menos que a íncide 2 seja a mesma ou menor que a íncide 1, nesse caso ele adiciona um asterisco.
for (let i = 0; i < n; i += 1) {
  triangulo.push("");
  for (let i2 = n - 1; i2 >= 0; i2 -= 1) {
    if (i2 <= i) {
      triangulo[i] += ("*");
    } else {
      triangulo[i] += (" ");
    }
  }
}

//Imprime o triângulo
for (i = 0; i < n; i += 1) {
  console.log(triangulo[i]);
}