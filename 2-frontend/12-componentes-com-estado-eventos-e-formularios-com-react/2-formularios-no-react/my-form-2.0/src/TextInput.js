import React from 'react';

class TextInput extends React.Component {
  render() {
    const { name, limit, handler } = this.props;
    const required = this.props.required ? true : false;

    return (
      <div className="container">
        {name}: 
        <input
        onChange={handler}
        type="text"
        required={required}
        name={name.toLowerCase()}
        maxLength={limit}
        />
      </div>
    )
  }
}

export default TextInput;
