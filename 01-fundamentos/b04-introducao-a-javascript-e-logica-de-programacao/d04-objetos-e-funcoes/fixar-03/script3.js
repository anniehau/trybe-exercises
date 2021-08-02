function maiorNumero(a, b, c) {
  if (a>b && a>c) {
    return a;
  } else if (b>a && b>c) {
    return b;
  } else if (c>a && c>b) {
    return c;
  } else {
    return "Mesmo número.";
  }
}

console.log(maiorNumero(1, 2, 3))