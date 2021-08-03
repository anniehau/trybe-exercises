// Esse segundo arquivo serve como um "what-if" para uma função que é adaptável à jogos diferentes. Ou seja, caso basket tenha frutas que eu não previamente adicionei ao objeto, nessa função as frutas são adicionadas caso não existam já dentro além de acrescentar o número para fazer a contagem de quantas vezes a fruta foi encontrada dentro de basket, então ela é bem adaptável.

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
];

let results = {
  Melancia: ['Melancia', 0],
}

// Esse for irá criar uma nova chave caso a fruta não exista dentro de results, e adicionará 1 a mais na chave certa caso a fruta exista.
for (i = 0; i < basket.length; i += 1) {
  for (key in results) {
    if (results.hasOwnProperty(basket[i])) {
      if (basket[i] === key) {
        results[key][1] += 1;
      } 
    } else {
      results[basket[i]] = [basket[i], 1];
    }
  }
}

// Imprimindo resultado
console.log('Sua cesta possui:')
for (key in results) {
  console.log(results[key][1], results[key][0] + 's');
}