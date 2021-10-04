let custo = 160;
let valor = 200;
let lucro = (valor - (custo * 1.2)) * 1000;

if (lucro > 0) {
  console.log(lucro)
} else if (lucro < 0) {
  console.log("ERRO: Perda de dinheiro.")
} else {
  console.log("Nenhum lucro.")
}