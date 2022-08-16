import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Grupo from './componentes/Grupo';
import { useState } from 'react';
import Rodape from './componentes/Rodape';
import Botao from './componentes/Botao';


let listaAtualizada = false

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

//localStorage Part
  let itens = localStorage.getItem("itens") || []
 
//localStorage Part

  const[receitas, setReceitas] = useState([])

  function aNovaReceitaAdicionada (receita) {
    setReceitas([...receitas, receita])
  }

//localStorage Part
    function atualizaCards(itens){
      if (itens.length !== 0 && !listaAtualizada)
      {
        itens = (JSON.parse(itens))

        for(let i=0; i<itens.length-1; i++)
        {
          receitas.push(itens[i])
        }
        itens.forEach(item => {
          aNovaReceitaAdicionada(item)
        });  
        listaAtualizada = true
      }
    }
//localStorage Part

  return (
    <div className="App">
      <Banner />
      
      <Formulario
        nomeDosGrupos={grupos.map(grupo => grupo.nome)}
        aReceitaCadastrada={receita => aNovaReceitaAdicionada(receita)}
      >
        <Botao classe="resgate" funcao={() => atualizaCards(itens)}> Resgatar receitas </Botao>
      </Formulario>
      

      {grupos.map(grupo => <Grupo 
        key={grupo.nome} 
        nome={grupo.nome} 
        corPrimaria={grupo.corPrimaria} 
        corSecundaria = {grupo.corSecundaria} 
        receitas={receitas.filter(receita => receita.grupo === grupo.nome)}
      />)}
      <Rodape/>
    </div>
    
  );
}



export default App;
