const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const testScore = (schoolArray, studentArray) => {
  let result = 0;
  for (let index in studentArray) {
    switch (studentArray[index]) {
      case schoolArray[index]:
        result += 1;
        break;
      case 'N.A':
        result = result;
        break;
      default:
        result -= 0.5;
        break
    }
  }

  return result;
}

const school = (schoolArray, studentArray, callback) => {
  const result = callback(schoolArray, studentArray);
  return result;
}

console.log(school(RIGHT_ANSWERS, STUDENT_ANSWERS, testScore))
