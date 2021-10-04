import Header from './Header';
import Content from './Content';
import Footer from './Footer';

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
      <Header />
      <Content />
      <Footer />
      <main>
        <ul>
          <h2>Coisas aprendidas no fundamentos</h2>
          {Task('Unix')}
          {Task('Git')}
          {Task('HTML')}
          {Task('CSS')}
          {Task('Javascript')}
          {Task('(...)')}
        </ul>
        <ol>
          <h2>Coisas a fazer</h2>
          {MakeList(compromissos)}
        </ol>
      </main>
    </div>
  );
}

export default App;
