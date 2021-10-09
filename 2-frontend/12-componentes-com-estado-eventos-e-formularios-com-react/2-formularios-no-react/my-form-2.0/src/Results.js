import React from 'react';

class Results extends React.Component {
  render() {
    const { submitted } = this.props;
    const { nome, email, cpf, endereço, cidade, estado, tipo, resume, job, job_description } = this.props.state;

    if (submitted) 
    return (
        <div class="container">
          <div class="container">
            <h4>Nome:</h4>
            <p>{nome}</p>
            <h4>Email:</h4>
            <p>{email}</p>
            <h4>CPF:</h4>
            <p>{cpf}</p>
            <h4>Endereço:</h4>
            <p>{endereço}</p>
            <h4>Cidade:</h4>
            <p>{cidade}</p>
            <h4>Estado:</h4>
            <p>{estado}</p>
            <h4>Tipo:</h4>
            <p>{tipo}</p>
            <h4>Resumo do currículo:</h4>
            <p>{resume}</p>
            <h4>Cargo:</h4>
            <p>{job}</p>
            <h4>Descrição do cargo:</h4>
            <p>{job_description}</p>
          </div>
        </div>
      )
    return (<div></div>);
  }
}

export default Results;
