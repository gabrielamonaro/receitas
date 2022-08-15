import Receita from '../Receita'
import './Grupo.css'

const Grupo = (props) => {
    //const estilo = {backgroundColor: props.corSecundaria}
    // const estiloCorPriaria = {borderColor: props.corPrimaria}
    return(
        
        //    <section className='grupo' style={estilo}>

        (props.receitas.length > 0) ? 
        <section className='grupo' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}> {props.nome} </h3>

            <div className='grupo-de-receitas'>
                {props.receitas.map(receita => <Receita 
                    corDeFundo={props.corPrimaria}
                    key={receita.nome}
                    nome={receita.nome} 
                    receita={receita.receita} 
                    imagem={receita.imagem}
                /> )}
            </div>
      
        </section>

        :''
    )
}

export default Grupo