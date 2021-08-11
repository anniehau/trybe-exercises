function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercicio 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function makeDays() {
  for (let i = 0; i < dezDaysList.length; i++) {
    let newElement = document.createElement('li');
    let day = dezDaysList[i];

    newElement.innerText = dezDaysList[i];
    newElement.classList.add('day')

    // Adiciona classe holiday
    if (day === 24 || day === 25 || day === 31) {
      newElement.classList.add('holiday')
    }

    // Adiciona classe friday
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      newElement.classList.add('friday')
    }

    document.querySelector('#days').appendChild(newElement);
  }
}

makeDays()

// Exercicio 2
function makeButton_1(buttonName) {
  let newElement = document.createElement('button');

  newElement.id = 'btn-holiday';
  newElement.innerHTML = buttonName;

  document.querySelector('.buttons-container').appendChild(newElement);
}

makeButton_1('Feriados');

// Exercicio 3
function buttonFunction_1() {
  document.querySelector('#btn-holiday').addEventListener('click', handleClick);
  
  function handleClick() {
    let holidays = document.querySelectorAll('.holiday');
    
    for (let i = 0; i < holidays.length; i++) {
      let day = holidays[i];
      
      if (!day.classList.contains('holidayOn')){
        day.style.backgroundColor = 'red';
        day.style.color = 'white';
        day.classList.add('holidayOn');
      } else if (day.classList.contains('holidayOn') && !day.classList.contains('fridayOn')) {
        day.style.backgroundColor = 'rgb(238,238,238)';
        day.style.color = '';
        day.classList.remove('holidayOn');
      } else if (day.classList.contains('fridayOn')) {
        day.classList.remove('holidayOn');
      }
    }
  }
}

buttonFunction_1();

// Exercicio 4
function makeButton_2(buttonName) {
  let newElement = document.createElement('button');

  newElement.id = 'btn-friday';
  newElement.innerHTML = buttonName;

  document.querySelector('.buttons-container').appendChild(newElement);
}

makeButton_2('Sexta-feira');

// Exercicio 5

function buttonFunction_2() {
  document.querySelector('#btn-friday').addEventListener('click', handleClick);

  function handleClick() {
    let friday = document.querySelectorAll('.friday');

    for (let i = 0; i < friday.length; i++) {
      let day = friday[i];

      if (!day.classList.contains('fridayOn')) {
        day.style.backgroundColor = 'red';
        day.style.color = 'white';
        day.classList.add('fridayOn');
      } else if (day.classList.contains('fridayOn') && !day.classList.contains('holidayOn')) {
        day.style.backgroundColor = 'rgb(238,238,238)';
        day.style.color = '';
        day.classList.remove('fridayOn');
      } else if (day.classList.contains('fridayOn') && day.classList.contains('holidayOn')) {
        day.classList.remove('fridayOn');
      } 
    }
  }
}

buttonFunction_2();