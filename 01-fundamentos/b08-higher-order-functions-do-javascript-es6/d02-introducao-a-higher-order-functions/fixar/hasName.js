const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  const nameExists = arr.some((element) => element === name);
  const result = nameExists ? 'O nome existe' : 'O nome não existe';
  return result;
}

console.log(hasName(names, 'Ana'))
