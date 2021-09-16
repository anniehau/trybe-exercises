function makeArray() {
  let result = [];
  for (let i = 0; i < 10; i += 1) {
    const num = Math.floor(Math.random() * 50) + 1
    result.push(num * num);
  };
  return result;
};

const promise = new Promise((resolve, reject) => {
  const array = makeArray();
  const sum = array.reduce((total, num) => total + num);
  if (sum < 8000) return resolve();
  reject();
}).then(() => console.log('Promise resolvida'))
.catch(() => console.log('Promise rejeitada'))
