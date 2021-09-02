const compare = (myNum, winNum) => myNum === winNum;

const lottery = (myNum, func) => {
  const winNum = Math.floor(Math.random() * 5 + 1);
  return func(myNum, winNum) ? 'Parabéns você ganhou!!!' : 'Tente novamente';
}

console.log(lottery(2, compare));
