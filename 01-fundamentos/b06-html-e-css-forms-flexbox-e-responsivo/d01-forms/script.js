window.onload = function() {
  // Variáveis
  const dateInput = document.querySelector('#date')
  const sendButton = document.querySelector('#send-form')
  const clearButton = document.querySelector('#clear-form')
  const listItems = document.querySelectorAll('.form-item');

  // Funções
  function loadStates() {
    let select = document.querySelector('.form-items select')
    let states = {
      'AC': 'Acre',
      'AL': 'Alagoas',
      'AP': 'Amapá',
      'AM': 'Amazonas',
      'BA': 'Bahia',
      'CE': 'Ceará',
      'DF': 'Distrito Federal',
      'ES': 'Espírito Santo',
      'GO': 'Goiás',
      'MA': 'Maranhão',
      'MT': 'Mato Grosso',
      'MS': 'Mato Grosso do Sul',
      'MG': 'Minas Gerais',
      'PA': 'Pará',
      'PB': 'Paraíba',
      'PR': 'Paraná',
      'PE': 'Pernambuco',
      'PI': 'Piauí',
      'RJ': 'Rio de Janeiro',
      'RN': 'Rio Grande do Norte',
      'RS': 'Rio Grande do Sul',
      'RO': 'Rondônia',
      'RR': 'Roraima',
      'SC': 'Santa Catarina',
      'SP': 'São Paulo',
      'SE': 'Sergipe',
      'TO': 'Tocantins'
    }

    for (state in states) {
      let element = document.createElement('option');
      element.innerText = states[state];
      element.value = state;
      select.appendChild(element);
    }
  }

  loadStates();

  function sendForm(event) {
    event.preventDefault();
    
    let allFilled = false;
    for (let index = 0; index < listItems.length; index += 1) {
      if (listItems[index].value !== "") {
        allFilled = true;
      } else {
        allFilled = false;
      }
    }

    let actualDate = document.querySelectorAll('.form-item')[11].value;
    let date = false;
    var parts = actualDate.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(actualDate)) {
      date = false;
    } else if (year < 0 || month <= 0 || month > 12 || day > 31 || day <= 0) {
      date = false;
    } else if (actualDate.length === 10) {
      date = true;
    }

    if (allFilled === true && date === true) {
      let div = document.createElement('div');
      div.classList.add("form");
      div.classList.add("result");
      document.body.appendChild(div);
  
      let h1 = document.createElement('h1');
      h1.innerText = 'Form enviado:';

      let results = [];
  
      for (let index = 0; index < listItems.length; index += 1) {
        results.push(listItems[index].value);
      }
  
      for (let index = 0; index < results.length; index += 1) {
        let p = document.createElement('p');
        p.innerText = results[index];
        div.appendChild(p);
      }

    } else if (allFilled === false) {
      window.alert('Falta preencher alguma coisa!')
    } else if (date === false) {
      window.alert('O formato da data está errado.')
    }
  }

  function clearForm() {
    for (let index = 0; index < listItems.length; index += 1) {
      listItems[index].value = "";
    }
    if (document.querySelector('.result')) {
      document.querySelector('.result').remove;
    }
  }

  // Event Listeners
  sendButton.addEventListener('click', sendForm)
  clearButton.addEventListener('click', clearForm)
}