import './Grupo.css'

const Grupo = (props) => {
    //const estilo = {backgroundColor: props.corSecundaria}
    // const estiloCorPriaria = {borderColor: props.corPrimaria}
    return(
        
        //    <section className='grupo' style={estilo}>

        
        <section className='grupo' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}> {props.nome} </h3>
        </section>
    )
}

export default Grupo