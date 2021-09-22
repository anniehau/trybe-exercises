const myRemove = require('./exercise2');

describe('Função de remover um item especifico da Array', () => {
  const array = [1, 2, 3, 4]; 
  it('Checa se o retorno remove o 3 da array original', () => {
    expect(myRemove(array, 3)).toEqual([1,2,4]);
  })
  it('Checa se o retorno não retorna a mesma array', () => {
    expect(myRemove(array, 3)).not.toEqual([array]);
  })
  it('Checa se o retorno não remove o 3 da array original', () => {
    myRemove(array, 3);
    expect(array).toEqual([1, 2, 3, 4]);
  })
  it('Checa se o retorno é array inalterado', () => {
    expect(myRemove(array, 5)).toEqual([1, 2, 3, 4]);
  })
})
