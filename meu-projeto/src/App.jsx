import './App.css';
import Pessoa from './components/Pessoa';

function App() {

  const nome = 'Victor'

  return (
    <div className="App">
      <Pessoa nome={nome} idade = '23' profissao = 'Progamador' foto = 'https://via.placeholder.com/150'/>  
    </div>
  
  );
}

export default App;
