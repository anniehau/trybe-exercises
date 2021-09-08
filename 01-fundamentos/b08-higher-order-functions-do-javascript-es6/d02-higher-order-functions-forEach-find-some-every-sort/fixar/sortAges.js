const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
function sortAges(array) {
  array.sort((a, b) => a.age - b.age);
}

function sortAgesInverted(array) {
  array.sort((a, b) => b.age - a.age);
}

console.log(people);
sortAges(people);
console.log(people);
sortAgesInverted(people);
console.log(people);
