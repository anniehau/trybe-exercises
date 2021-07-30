// Fazer uma pirâmide de asteriscos
let n = 50;
let triangulo = [];

//Cria a pirâmide mas apenas coloca um asterisco no exato numero da índice.
for (let i = 0; i < n; i += 1) {
  triangulo.push("");
  if (i === n - 1) {
    for(let i4 = 1; i4 <= n * 2; i4 += 1) {
      let parImpar = i4 % 2;
      if (parImpar === 1) {
        triangulo[i] += ("*");
      } else {
        triangulo[i] += (" ");
      }
    }
  } else {
    for (let i2 = n - 1; i2 >= 0; i2 -= 1) {
      if (i2 == i) {
        triangulo[i] += ("*");
      } else {
        triangulo[i] += (" ");
      }
    }
    for (let i3 = 1; i3 < (i + 1); i3 += 1) {
      if (i3 == i) {
        triangulo[i] += ("*");
      } else {
        triangulo[i] += (" ");
      }
    }
  }
}

//Imprime a pirâmide
console.log("Abaixo está uma pirâmide vazio no meio, do número de sua escolha :D");
for (i = 0; i < n; i += 1) {
  console.log(triangulo[i]);
}