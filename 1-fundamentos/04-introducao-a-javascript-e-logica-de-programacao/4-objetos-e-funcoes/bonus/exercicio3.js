const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

let results = {
  ml: ['Melancia', 0],
  ab: ['Abacate', 0],
  uv: ['Uva', 0],
  la: ['Laranja', 0],
  ja: ['Jaca', 0],
  pe: ['Pera', 0],
  ba: ['Banana', 0],
}

let tryage = 'try';

for (key in results) {
  for (i = 0; i < basket.length; i += 1) {
    if (basket[i] === results[key][0]) {
      results[key][1] += 1;
    }
  }
}

results[tryage] = 1;
console.log(results);

console.log("Sua cesta possui:", results.ml[1], results.ml[0] + "s,", results.ab[1], results.ab[0] + "s,", results.uv[1], results.uv[0] + "s,", results.la[1], results.la[0] + "s,", results.ja[1], results.ja[0] + "s,", results.pe[1], results.pe[0] + "s e", results.ba[1], results.ba[0] + "s.")