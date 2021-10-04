const { users, findUserById, getUserName } = require("./base-1");

test('O retorno é correto', () => {
  return expect(getUserName(1)).resolves.toBe('Mark');
})

test('Retorna o erro com a mensagem correta', () => {
  return expect(getUserName(0)).rejects.toThrow('User with 0 not found.');
})
