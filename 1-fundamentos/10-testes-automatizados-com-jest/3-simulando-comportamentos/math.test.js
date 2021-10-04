const math = require('./math');

//-- Exercicio 1
test('Math.sum está funcionando', () => {
  const mockSubtrair = jest
  .spyOn(math, "subtrair")

  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled();
});
//-- Exercicio 2
test('A função multiplicar retorna o valor padrão', () => {
  math.multiplicar = jest.fn().mockReturnValue(10);

  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar()).toBe(10);
});
//-- Exercicio 3
test('Somar retorna a soma de dois valores', () => {
  math.somar = jest.fn()
  .mockImplementation((a, b) => a + b);

  math.somar(1, 2);
  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});
// -- Exercicio 4
test('Dividir retorna os valores esperados por mock', () => {
  math.dividir = jest.fn()
  .mockReturnValue(15)
  .mockReturnValueOnce(2)
  .mockReturnValueOnce(5);
  expect(math.dividir).toHaveBeenCalledTimes(0);
  
  expect(math.dividir()).toBe(2);
  expect(math.dividir).toHaveBeenCalledTimes(1);

  expect(math.dividir()).toBe(5);
  expect(math.dividir).toHaveBeenCalledTimes(2);

  expect(math.dividir()).toBe(15);
  expect(math.dividir).toHaveBeenCalledTimes(3);
})
// Exercicio 5
test('Subtrair restaura a implementação original após o mock', () => {
  math.subtrair.mockClear();
  math.subtrair.mockReturnValue(20);

  math.subtrair();
  expect(math.subtrair).toHaveBeenCalledTimes(1);
  
  expect(math.subtrair()).toBe(20);
  expect(math.subtrair).toHaveBeenCalledTimes(2);

  math.subtrair.mockRestore()
  expect(math.subtrair(1, 2)).toBe(-1);
})