const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  const isAbove18 = arr.every((element) => element.age >= 18);
  const result = isAbove18 ? 'Todos são acima de 18' : 'Alguém chama o pai dessa criança!!!'
  return result;
}

console.log(verifyAges(people, 18));
