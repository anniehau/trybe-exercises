const sum = require('./exercise1');

describe('Função de soma', () => {
  it('Checa a soma de números inteiros', () => {
    expect(sum(4, 5)).toBe(9);
  })
  it('Checa se os números forem 0, retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  })
  it('Checa se a função retorna erro caso os parâmetros sejam uma string', () => {
    expect(() => { sum(4, '5') }).toThrow();
  })
  it('Checa se a mensagem de erro está correta', () => {
    expect(() => { sum(4, '5') }).toThrow('parameters must be numbers');
  })
})
