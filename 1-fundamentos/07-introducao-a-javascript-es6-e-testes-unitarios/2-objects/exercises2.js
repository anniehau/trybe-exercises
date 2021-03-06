const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const addMorningTurn = (obj, key, value) => obj[key] = value;
addMorningTurn(lesson2, 'turno', 'manhã');

const listKeys = (obj) => console.log(`Keys: "${Object.keys(obj)}".`);
listKeys(lesson1);

const listSize = (obj) => console.log(`Tamanho do objeto: ${Object.entries(obj).length}.`);
listSize(lesson3);

function totalStudents(obj) {
  const array = Object.keys(obj);
  let result = 0;

  for (index in array) {
    result += obj[array[index]].numeroEstudantes;
  }

  console.log(Object);
}

totalStudents(allLessons);

function keyValue(obj, value) {
  const array = Object.values(obj);

  return array[value];
}

console.log(keyValue(lesson1, 0));

function verifyPair(obj, key, value) {
  if (obj[key] === value) {
    return true;
  }

  return false;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

function mathStudents() {
  const array = Object.keys(allLessons);
  let result = 0;

  for (index in array) {
    if (allLessons[array[index]].materia === 'Matemática') {
      result += allLessons[array[index]].numeroEstudantes;
    }
  }

  return result;
}

console.log(mathStudents());

function createReport(obj, teacher) {
  const array = Object.keys(allLessons);
  const report = {
    professor: teacher,
    aulas: [],
    estudantes: 0
  }

  for (index in array) {
    if (allLessons[array[index]].professor === teacher) {
      report.aulas.push(allLessons[array[index]].materia);
      report.estudantes += allLessons[array[index]].numeroEstudantes;
    }
  }

  return report;
}

console.log(createReport(allLessons, 'Maria Clara'));
