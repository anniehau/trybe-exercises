import React from 'react';
import TextInput from './TextInput'
import data from './data';

const firstState = {
  nome: '',
  email: '',
  cpf: '',
  endereço: '',
  cidade: '',
  estado: '',
  tipo: '',
}

class PersonalData extends React.Component {
  constructor() {
    super();

    this.state = firstState;
    this.handle = this.handle.bind(this);
  }

  handle({ target }, limit) {
    let { name, value } = target;

    if (value.length > limit) return value.slice(0, -1)
    if (name === 'nome') {
      this.setState({[name]: value.toUpperCase()});
      return value.toUpperCase();
    }
    this.setState({[name]: value})
    return value;
  }

  render() {
    const { handle } = this;

    return (
      <fieldset className="personal-data">
        <TextInput
        handler={handle}
        className="m-input"
        name="Nome"
        limit={40}
        required
        />

        <TextInput
        handler={handle}
        className="m-input"
        name="Email"
        limit={50}
        required
        />

        <TextInput
        handler={handle}
        className="s-input"
        name="CPF"
        limit={11}
        required
        />

        <TextInput
        handler={handle}
        className="x-input"
        name="Endereço"
        limit={200} 
        required
        />

        <TextInput
        handler={handle}
        className="m-input"
        name="Cidade"
        limit={28}
        required
        />

        <select className="state-select" required>
          {data.map((estado) => (<option>{estado}</option>))}
        </select>

        <div className="container">
          <input
          id="casa"
          name="tipo"
          type="radio"
          required
          />
          <label for="casa">Casa</label>
          
          <input
          id="apt"
          name="tipo"
          type="radio"
          required
          />
          <label for="apt">Apartamento</label>
        </div>
      </fieldset>
    )
  }
}

export default PersonalData;