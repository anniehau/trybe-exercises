import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

function MakeContent() {
  return conteudos.map((cont) => {
    return <div className="key">
      <h4>O conteúdo é {cont.conteudo}</h4>
      <p>Status: {cont.status}</p>
      <p>Bloco: {cont.bloco}</p>  
    </div>
  });
};

class Content extends React.Component {
  render() {
    return (
      <div>
        {MakeContent()}
      </div>
    );
  }
}

export default Content;
