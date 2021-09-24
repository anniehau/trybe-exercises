// Função gera número aleatório entre 1 e 100
function randomNumber() { return Math.floor(Math.random() * 101) };

describe('Testa a função randomNumber', () => {
  test('A função em mock retorna o esperado', () => {
    randomNumber = jest.fn().mockReturnValue(10);

    randomNumber();
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalledTimes(2);
  })
  test('A função com uma nova implementação retorna o esperado', () => {
    randomNumber = jest.fn()
    .mockImplementation((a, b) => a / b);

    randomNumber();
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber(2, 2)).toBe(1);
    expect(randomNumber).toHaveBeenCalledTimes(2);
  })
  test('A função com uma duas novas implementações retorna o esperado', () => {
    randomNumber = jest.fn()
    .mockImplementation((num1, num2, num3) => num1 * num2 * num3);

    expect(randomNumber(1, 2, 3)).toBe(6);
    expect(randomNumber).toHaveBeenCalled();

    randomNumber.mockReset()
    .mockImplementation((num) => num * 2);

    expect(randomNumber(2)).toBe(4);
    expect(randomNumber).toHaveBeenCalledTimes(1);
  })
})

