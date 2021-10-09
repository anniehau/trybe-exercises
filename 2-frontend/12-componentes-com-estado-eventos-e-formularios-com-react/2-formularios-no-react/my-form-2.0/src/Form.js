import React from 'react';
import PersonalData from './PersonalData';
import LastJob from './LastJob';

const firstState = {
  nome: '',
  email: '',
  cpf: '',
  endereço: '',
  cidade: '',
  estado: '',
  tipo: '',
  resume: '',
  job: '',
  job_description: '',
}

class Form extends React.Component {
  constructor() {
    super();

    this.state = firstState;
    this.handle = this.handle.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handle({ target }) {
    let { name, value } = target;

    if (name === 'nome') value = value.toUpperCase();
    if (name === 'endereço') value = this.handleAddress(target);

    this.setState({[name]: value})
  }

  handleBlur({ target }) {
    if(!target.value) return '';

    if (target.value[0].match(/^\d/)) {
      this.setState({cidade: ''});
      target.value = '';
    }
  }

  handleAddress({ value }) {
    return value.replace(/[^\w\s]/gi, '');
  }

  cleanStates = () => {
    this.setState({ ...firstState });
    return firstState;
  }

  render() {
    const { handleButtons } = this.props;
    const { state } = this;

    return (
      <form>
        <PersonalData state={state} handle={this.handle} handleBlur={this.handleBlur} />
        <LastJob state={state} handle={this.handle} />

        <button 
        className="btn-submit" 
        type="button" 
        onClick={() => handleButtons(state, true)}
        >
          Enviar
        </button>

        <button
        className="btn-submit"
        type="reset"
        onClick={() => handleButtons(this.cleanStates(), false)}
        >
          Limpar
        </button>
      </form>
    )
  }
}

export default Form;