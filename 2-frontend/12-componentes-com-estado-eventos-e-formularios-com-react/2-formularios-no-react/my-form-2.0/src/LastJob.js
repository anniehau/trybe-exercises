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
        <div className="container">
          Resumo do currículo:
          <textarea onChange={handle} name="resume" maxLength="1000" required></textarea>
        </div>
        <div className="container">
          Cargo:
          <textarea onChange={handle} onMouseEnter={this.alert} name="job" maxLength="40" required ></textarea>
        </div>
        <div className="container">
          Descrição do cargo:
          <textarea onChange={handle} name="job_description" maxLength="500" required></textarea>
        </div>
      </fieldset>
    )
  }
}

export default LastJob;