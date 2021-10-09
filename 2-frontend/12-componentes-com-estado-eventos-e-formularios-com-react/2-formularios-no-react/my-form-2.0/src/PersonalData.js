import React from 'react';
import data from './data';

class PersonalData extends React.Component {
  render() {
    const { handle, handleBlur, state } = this.props;

    return (
      <fieldset className="personal-data">
        <h2>Informação Pessoal</h2>
        <div className="container">
          <span>Nome:</span>
          <input
          className="text-input"
          onChange={handle}
          type="text"
          name="nome"
          maxLength="40"
          value={state.nome}
          required
          />
        </div>

        <div className="container">
          <span>E-mail:</span>
          <input
          className="text-input"
          onChange={handle}
          type="text"
          name="email"
          maxLength="50"
          value={state.email}
          required
          />
        </div>

        <div className="container">
          <span>CPF:</span>
          <input
          className="text-input"
          onChange={handle}
          type="text"
          name="cpf"
          maxLength="11"
          value={state.cpf}
          required
          />
        </div>

        <div className="container">
          <span>Endereço:</span>
          <input
          className="text-input"
          onChange={handle}
          type="text"
          name="endereço"
          maxLength="200"
          value={state.endereço}
          required
          />
        </div>

        <div className="container">
        <span>Cidade:</span>
          <input
          className="text-input"
          onChange={handle}
          onBlur={handleBlur}
          type="text"
          name="cidade"
          maxLength="28"
          value={state.cidade}
          required
          />
        </div>

        <div className="container">
          <span>Estado:</span>
          <select name="estado" onChange={handle} className="state-select" required>
            {data.map((estado, index) => (<option key={index}>{estado}</option>))}
          </select>
        </div>

        <div className="container-vertical">
          <p>Complemento</p>
          <div>
            <input
            onChange={handle}
            id="casa"
            name="tipo"
            type="radio"
            value="Casa"
            required
            />
            <label htmlFor="casa">Casa</label>
          </div>
          
          <div>
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
        </div>
      </fieldset>
    )
  }
}

export default PersonalData;