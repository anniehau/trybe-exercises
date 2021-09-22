const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Se a função uppercase retorna o esperado', (done) => {
  uppercase('testando a função', (result) => {
    try {
      expect(result).toBe('TESTANDO A FUNÇÃO');
      done();
    } catch(error) {
      done(error);
    }
  })
})
