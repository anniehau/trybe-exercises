import React from 'react';

class LastJob extends React.Component {
  constructor() {
    super();

    this.state = {
      alerted: false,
    }
  }

  alert = () => {
    if (this.state.alerted === false) {
      window.alert('Preencha esse campo com cuidado!')
      this.setState({alerted: true});
    }
  }

  render() {
    const { handle } = this.props;

    return (
      <fieldset>
        <h2>Informação Profissional</h2>
        <div className="container-vertical">
        <p>Resumo do currículo:</p>
          <textarea onChange={handle} name="resume" maxLength="1000" required></textarea>
        </div>
        <div className="container-vertical">
          <p>Cargo:</p>
          <textarea onChange={handle} onMouseEnter={this.alert} name="job" maxLength="40" required ></textarea>
        </div>
        <div className="container-vertical">
          <p>Descrição do cargo:</p>
          <textarea onChange={handle} name="job_description" maxLength="500" required></textarea>
        </div>
      </fieldset>
    )
  }
}

export default LastJob;