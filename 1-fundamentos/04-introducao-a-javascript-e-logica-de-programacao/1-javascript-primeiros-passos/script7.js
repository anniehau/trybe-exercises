let nota = -1;

if (nota > 100 || nota < 0) {
  nota = "ERRO";
} else if (nota >= 90) {
  nota = "A";
} else if (nota >= 80) {
  nota = "B";
} else if (nota >= 70) {
  nota = "C";
} else if (nota >= 60) {
  nota = "D";
} else if (nota < 50) {
  nota = "F";
}

console.log(nota)