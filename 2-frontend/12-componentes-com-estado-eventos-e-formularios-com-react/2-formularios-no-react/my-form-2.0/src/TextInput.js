import React from 'react';

class TextInput extends React.Component {
  constructor() {
    super();

    this.handle = this.handle.bind(this);
  }

  handle(event, handler) {
    event.target.value = handler(event, this.props.limit);
  }

  render() {
    const { name, handler } = this.props;
    const { handle } = this
    const required = this.props.required ? true : false;

    return (
      <div className="container">
        {name}: 
        <input
        onChange={(event) => handle(event, handler)}
        type="text"
        required={required}
        name={name.toLowerCase()}
        />
      </div>
    )
  }
}

export default TextInput;
