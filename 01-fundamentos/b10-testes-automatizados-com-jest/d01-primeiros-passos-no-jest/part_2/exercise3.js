function hydrate(string) {
  // seu código aqui
  let water = string.match(/\d+/g).map((string) => Number(string));
  water = water.reduce((acc, curr) => acc + curr);
  if (water === 1) return `${water} copo de água`;
  return `${water} copos de água`;
}

module.exports = hydrate;
