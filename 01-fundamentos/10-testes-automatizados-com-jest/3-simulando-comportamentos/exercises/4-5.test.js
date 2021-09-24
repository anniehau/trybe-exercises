const string = require('./4-5');

// Exercicio 4
describe('Teste de mock retornando à funcionalidade original após', () => {
  test('Função uppercase retorna tudo em lowercase', () => {
    const mockUppercase = jest.spyOn(string, 'uppercase')
    .mockImplementation((str) => str.toLowerCase());
  
    expect(string.uppercase('TESTE')).toBe('teste');
    expect(string.uppercase).toHaveBeenCalled();

    string.uppercase.mockRestore();
    expect(string.uppercase('teste')).toBe('TESTE');
  })
  
  test('Função first retorna o último caractére', () => {
    const mockFirst =  jest.spyOn(string, 'first')
    .mockImplementation((str) => str[str.length-1]);
    
    expect(string.first('teste')).toBe('e');
    expect(string.first).toHaveBeenCalled();

    string.first.mockRestore();
    expect(string.first('teste')).toBe('t');
  })
  
  test('Função fuse funde 3 strings', () => {
    const mockFuse =  jest.spyOn(string, 'fuse')
    .mockImplementation((str1, str2, str3) => str1 + str2 + str3);
    
    expect(string.fuse('tes', 't', 'e')).toBe('teste');
    expect(string.fuse).toHaveBeenCalled();

    string.fuse.mockRestore();
    expect(string.fuse('tes', 'te')).toBe('teste');
  })
})
