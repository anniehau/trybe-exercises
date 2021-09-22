let nota = 80;
let candidata;

if (nota >= 80) {
  candidata = "aprovada";
} else if (nota < 80 && nota >= 60) {
  candidata = "lista";
} else if (nota < 60) {
  candidata = "reprovada";
}

switch (candidata) {
  case "aprovada":
    console.log("Parabéns, você foi aprovada(o).");
    break;
  case "lista":
    console.log("Você está na lista de espera.");
    break;
  case "reprovada":
    console.log("Você foi reprovada(o).");
    break;
  default:
    console.log("Não se aplica.");
}