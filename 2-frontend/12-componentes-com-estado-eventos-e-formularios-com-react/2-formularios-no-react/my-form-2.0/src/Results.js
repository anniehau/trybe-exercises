import React from 'react';

class Results extends React.Component {
  render() {
    const { submitted } = this.props;
    const { nome, email, cpf, endereço, cidade, estado, tipo, resume, job, job_description } = this.props.state;

    if (submitted) 
    return (
        <fieldset>
          <h1>Suas Respostas!</h1>
          <div class="container-vetical">
          <div class="container-vetical">
            <h4>Nome:</h4>
            <p>{nome ? nome : 'Não foi preenchido.'}</p>
            <h4>Email:</h4>
            <p>{email ? email : 'Não foi preenchido.'}</p>
            <h4>CPF:</h4>
            <p>{cpf ? cpf : 'Não foi preenchido.'}</p>
            <h4>Endereço:</h4>
            <p>{endereço ? endereço : 'Não foi preenchido.'}</p>
            <h4>Cidade:</h4>
            <p>{cidade ? cidade : 'Não foi preenchido.'}</p>
            <h4>Estado:</h4>
            <p>{estado ? estado : 'Não foi preenchido.'}</p>
            <h4>Tipo:</h4>
            <p>{tipo ? tipo : 'Não foi preenchido.'}</p>
            <h4>Resumo do currículo:</h4>
            <p>{resume ? resume : 'Não foi preenchido.'}</p>
            <h4>Cargo:</h4>
            <p>{job ? job : 'Não foi preenchido.'}</p>
            <h4>Descrição do cargo:</h4>
            <p>{job_description ? job_description : 'Não foi preenchido.'}</p>
          </div>
        </div>
        </fieldset>
      )
    return (<div></div>);
  }
}

export default Results;
