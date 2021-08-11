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
function createButton(buttonName) {
  let newElement = document.createElement('button');

  newElement.id = 'btn-holiday';
  newElement.innerHTML = buttonName;

  document.querySelector('.buttons-container').appendChild(newElement);
}

createButton('Feriados');

// Exercicio 3
function buttonFunction() {
  document.querySelector('#btn-holiday').addEventListener('click', handleClick);
  
  function handleClick() {
    let holidays = document.querySelectorAll('.holiday');
    
    for (let i = 0; i < holidays.length; i++) {
      let day = holidays[i];

      if (day.style.backgroundColor === 'red') {
        day.style.backgroundColor = 'rgb(238,238,238)';
        day.style.color = '';
      }  else {
        day.style.backgroundColor = 'red';
        day.style.color = 'white';
      }
    }
  }
}

buttonFunction();