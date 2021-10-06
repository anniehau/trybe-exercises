import React from 'react';

class Pokemon extends React.Component {
  render() {
    const pokemon = this.props.data;
    return (
      <div className="card" id={pokemon.id}>
        <div>
          <p>{pokemon.name}</p>
          <p>{pokemon.type}</p>
          <p>Peso médio: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
        </div>
        <img src={pokemon.image} alt={pokemon.name} href={pokemon.moreInfo}/>
      </div>
    )
  };
};

export default Pokemon;