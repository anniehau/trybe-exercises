const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

function sendMarsTemperature(callback) {
  setTimeout(() => console.log(callback()), messageDelay());
}

// crie a função sendMarsTemperature abaixo

sendMarsTemperature(getMarsTemperature); // imprime "Mars temperature is: 20 degree Celsius", por exemplo