import './App.css';
import React from 'react';
import Form from './Form';
import Results from './Results';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      submitted: false,
    }
  }

  handleButtons = (state, result) => {
    this.setState({submitted: result});
    this.setState({ ...state })
    if (result === false) this.setState({})
  }

  reset = () => {
    return false;
  }

  render() {
    return (
      <div className="App">
        <Form handleButtons={this.handleButtons} />
        <Results submitted={this.state.submitted} state={this.state} />
      </div>
    );
  }
}

export default App;
