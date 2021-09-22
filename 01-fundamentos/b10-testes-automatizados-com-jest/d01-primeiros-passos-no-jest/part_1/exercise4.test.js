const myFizzBuzz = require('./exercise4');

describe('Função de FizzBuzz', () => {
  it('Verifica se o retorno de 15 é fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
  it('Verifica se o retorno de 9 é fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  })
  it('Verifica se o retorno de 10 é buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  })
  it('Verifica se o retorno de 4 é 4', () => {
    expect(myFizzBuzz(4)).toBe(4);
  })
  it('Verifica se o retorno de uma string é false', () => {
    expect(myFizzBuzz('15')).toBe(false);
  })
})
