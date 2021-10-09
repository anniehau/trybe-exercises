import React from 'react';
import TextInput from './TextInput'
import data from './data';

class PersonalData extends React.Component {
  render() {
    const { handle, handleBlur, state } = this.props;

    return (
      <fieldset className="personal-data">
        <div className="container">
          Nome:
          <input
          onChange={handle}
          type="text"
          name="nome"
          maxLength="40"
          value={state.nome}
          required
          />
        </div>

        <div className="container">
          E-mail:
          <input
          onChange={handle}
          type="text"
          name="email"
          maxLength="50"
          value={state.email}
          required
          />
        </div>

        <div className="container">
          CPF:
          <input
          onChange={handle}
          type="text"
          name="cpf"
          maxLength="11"
          value={state.cpf}
          required
          />
        </div>

        <div className="container">
          Endereço:
          <input
          onChange={handle}
          type="text"
          name="endereço"
          maxLength="200"
          value={state.endereço}
          required
          />
        </div>

        <div className="container">
          Cidade:
          <input
          onChange={handle}
          onBlur={handleBlur}
          type="text"
          name="cidade"
          maxLength="28"
          value={state.cidade}
          required
          />
        </div>

        <select name="estado" onChange={handle} className="state-select" required>
          {data.map((estado, index) => (<option key={index}>{estado}</option>))}
        </select>

        <div className="container">
          <input
          onChange={handle}
          id="casa"
          name="tipo"
          type="radio"
          value="Casa"
          required
          />
          <label htmlFor="casa">Casa</label>
          
          <input
          onChange={handle}
          id="apt"
          name="tipo"
          type="radio"
          value="Apartamento"
          required
          />
          <label htmlFor="apt">Apartamento</label>
        </div>
      </fieldset>
    )
  }
}

export default PersonalData;