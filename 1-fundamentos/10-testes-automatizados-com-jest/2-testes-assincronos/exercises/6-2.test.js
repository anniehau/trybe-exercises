const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Animals.filter((animal) => animal.age === age);
      if (result.length === 0) return reject('Nenhum animal com essa idade!')
      return resolve(result);
    }, 1000);
  });
}

// ---------------------

test('Retorna um array de objetos com os animais da idade requisitada', () => {
  return findAnimalByAge(5).then((data) => {
    expect(data).toEqual([ { name: 'Preguiça', age: 5, type: 'Cat' } ])
  })
})

test('Retorna um array de objetos com os animais da idade requisitada', () => {
  expect.assertions(1);
  return findAnimalByAge(10)
  .catch((error) => expect(error).toBe('Nenhum animal com essa idade!'))
})
