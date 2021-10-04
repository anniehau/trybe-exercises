const { users, findUserById, getUserName } = require("./base-1");

test('O retorno é correto', async () => {
  expect(await getUserName(1)).toBe('Mark');
})

test('Retorna o erro com a mensagem correta', async () => {
  expect.assertions(1);
  try {
    await getUserName(0);
  } catch(error) {
    expect(error).toEqual(new Error('User with 0 not found.'));
  }
})
