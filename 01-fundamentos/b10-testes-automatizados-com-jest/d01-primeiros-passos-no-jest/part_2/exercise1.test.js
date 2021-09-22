const challenges = require('./exercise1');

describe('Funções encode e decode', () => {
  it('Verifica se elas são funções', () => {
    expect(typeof challenges.encode).toBe('function');
    expect(typeof challenges.decode).toBe('function');
  })
  it('Verifica se as vogais são convertidas corretamente', () => {
    expect(challenges.encode('a,e,i,o,u')).toBe('1,2,3,4,5');
  })
  it('Verifica se os números são convertidos para vogais', () => {
    expect(challenges.decode('1,2,3,4,5')).toBe('a,e,i,o,u');
  })
  it('Verifica se outras letras não são convertidas', () => {
    let string = 'b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z';
    expect(challenges.encode(string)).toBe(string);
  })
  it('Verifica se o tamanho do resultado é o mesmo do parâmetro', () => {
    expect(challenges.decode('1,2,3,4,5').length).toBe(9);
  })
})
