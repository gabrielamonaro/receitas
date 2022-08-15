import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Grupo from './componentes/Grupo';
import { useState } from 'react';

function App() {

  const grupos = [
    {
      nome: 'Café da manhã',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Lanche da manhã',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Almoço',
    corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E8',
    },
    {
      nome: 'Café da tarde',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'Jantar',
    corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: 'Lanche da noite',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Sobremesas',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },
  
]
  
  const[colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario
        nomeDosGrupos={grupos.map(grupo => grupo.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />

      {grupos.map(grupo => <Grupo 
      key={grupo.nome} 
      nome={grupo.nome} 
      corPrimaria={grupo.corPrimaria} 
      corSecundaria = {grupo.corSecundaria} 
      />)}
    
    </div>
  );
}

export default App;
