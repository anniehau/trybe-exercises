function maiorNumero(a, b) {
  if (a>b) {
    return a;
  } else if (b>a) {
    return b;
  } else {
    return "Mesmo número.";
  }
}
console.log(maiorNumero(55,55))