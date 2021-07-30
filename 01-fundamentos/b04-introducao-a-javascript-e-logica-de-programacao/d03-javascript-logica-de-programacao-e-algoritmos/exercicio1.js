// Fazer um quadrado de asteriscos de lado de tamanho n.
let n = 10;
let quadrado = [];

//Vamos criar cada elemento da array e colocar 10 quadrados nela antes de continuar para o próximo elemento.
for (let i = 0; i < n; i += 1) {
  quadrado.push("*");
  for(let i2 = 2; i2 <= n; i2 += 1) {
    quadrado[i] += ("*");
  }
}

//Imprime o quadrado
console.log("Abaixo está um quadrado, do número de sua escolha :D");
for (i = 0; i < n; i += 1) {
  console.log(quadrado[i]);
}