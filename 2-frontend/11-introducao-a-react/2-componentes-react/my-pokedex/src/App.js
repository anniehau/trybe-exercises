import React from 'react';
import pokedex from './data.js';
import Pokemon from './Pokemon'
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        <h1>Pokedex</h1>
      </div>
      <div className="pokedex">
        {pokedex.map((data) => <Pokemon data={data} />)}
      </div>
    </div>
  );
}

export default App;
