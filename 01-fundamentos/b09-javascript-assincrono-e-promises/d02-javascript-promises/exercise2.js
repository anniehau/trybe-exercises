function makeArray() {
  let result = [];
  for (let i = 0; i < 10; i += 1) {
    const num = Math.floor(Math.random() * 50) + 1
    result.push(num * num);
  };
  return result;
};

function fetchPromise() {
  const promise = new Promise((resolve, reject) => {
    const array = makeArray();
    const sum = array.reduce((total, num) => total + num);
    sum < 8000 ? resolve(sum) : reject()
  })

  promise
    .then((sum) => {
      console.log('Promise resolvida')
      const division = [2, 3, 5, 10];
      return division.map((num) => sum / num);
  })
    .then((arr) => arr.reduce((total, num) => total + num))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};

fetchPromise();
