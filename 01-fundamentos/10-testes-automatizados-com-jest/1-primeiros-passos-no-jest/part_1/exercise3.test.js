const myRemoveWithoutCopy = require('./exercise3');

describe('Função de remover um item do array diretamente alterando o array passado por parâmetro', () => {
  let array = [1, 2, 3, 4]; 
  it('Checa se o retorno remove o 3 da array original', () => {
    expect(myRemoveWithoutCopy(array, 3)).toEqual([1,2,4]);
  })
  it('Checa se o retorno não retorna a mesma array', () => {
    array = [1, 2, 3, 4]
    expect(myRemoveWithoutCopy(array, 3)).not.toEqual([array]);
  })
  it('Checa se o retorno remove o 3 da array original', () => {
    array = [1, 2, 3, 4]
    myRemoveWithoutCopy(array, 3);
    expect(array).toEqual([1, 2, 4]);
  })
  it('Checa se o retorno é array inalterado', () => {
    array = [1, 2, 3, 4]
    expect(myRemoveWithoutCopy(array, 5)).toEqual([1, 2, 3, 4]);
  })
})
