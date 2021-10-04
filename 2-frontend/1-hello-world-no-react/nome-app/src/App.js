import logo from './logo.svg';
import './App.css';

const compromissos = ['Lavar as roupas', 'Varrer a casa', 'Estudar japonês', 'Ir para o curso', 'Tomar banho']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const MakeList = (value) => {
  return value.map((data) => <li>{data}</li>);
}

function App() {
  return (
    <div>
      <ul>
        <h2>Coisas aprendidas</h2>
        {Task('Unix')}
        {Task('Git')}
        {Task('HTML')}
        {Task('CSS')}
        {Task('Javascript')}
        {Task('(...)')}
      </ul>
      <ol>
        {MakeList(compromissos)}
      </ol>
    </div>
  );
}

export default App;
