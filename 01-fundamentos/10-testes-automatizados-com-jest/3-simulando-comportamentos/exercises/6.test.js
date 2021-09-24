const fetch = require('node-fetch');

function dog() {
  const url = 'https://dog.ceo/api/breeds/image/random';
  return new Promise((resolve, reject) => {
    const result = fetch(url)
    .then((data) => data.json())

    if (result) return resolve(result);
    return reject(new Error(`ERRO!`));
  })
}

test('A função retorna o objeto correto', async () => {
  dog = jest.fn()
  .mockImplementation((callback) => {
    setTimeout(() => callback('request success'), 1000)
  });

  dog((result) => {
    expect(result).toEqual('request success');
  })
})

test('A função retorna o erro correto', async () => {
  dog = jest.fn()
  .mockImplementation((callback) => {
    setTimeout(() => callback('request failed'), 1000)
  });

  dog((result) => {
    expect(result).toEqual('request failed');
  })
})
