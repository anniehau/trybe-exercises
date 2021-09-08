const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const market = products.map((product, index) => { return { product: product, price: prices[index] } });

console.log(market);