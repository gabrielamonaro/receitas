import './Receita.css'

const Receita = (props) => {
    return (
        <div className='receita'>
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
                <img src={props.imagem} alt={props.nome}></img>
            </div>
            <div className='rodape'>
                <h4> {props.nome}</h4>
                <h5> <a href={props.receita}> Receita </a> </h5>
            </div>
        </div>
    )
}

export default Receita