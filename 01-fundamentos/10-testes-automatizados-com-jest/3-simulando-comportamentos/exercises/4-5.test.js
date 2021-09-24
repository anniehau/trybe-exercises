const string = require('./4-5');

// Exercicio 4
describe('Exercicio 4 - Teste de mock com as funções de string', () => {
  test('Função uppercase retorna tudo em lowercase', () => {
    string.uppercase = jest.fn()
    .mockImplementation((str) => str.toLowerCase());
  
    expect(string.uppercase('TESTE')).toBe('teste');
    expect(string.uppercase).toHaveBeenCalled();
  })
  
  test('Função first retorna o último caractére', () => {
    string.first = jest.fn()
    .mockImplementation((str) => str[str.length-1]);
    
    expect(string.first('teste')).toBe('e');
    expect(string.first).toHaveBeenCalled();
  })
  
  test('Função fuse funde 3 strings', () => {
    string.fuse = jest.fn()
    .mockImplementation((str1, str2, str3) => str1 + str2 + str3);
    
    expect(string.fuse('tes', 't', 'e')).toBe('teste');
    expect(string.fuse).toHaveBeenCalled();
  })
})