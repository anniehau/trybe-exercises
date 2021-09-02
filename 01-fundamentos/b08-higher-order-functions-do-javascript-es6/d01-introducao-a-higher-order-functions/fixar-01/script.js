const wakeUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const goodNight = () => 'Partiu dormir!!';
const doingThings = (func) => func();

// Ao chamar a função doingThings:
console.log(doingThings(wakeUp));

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
