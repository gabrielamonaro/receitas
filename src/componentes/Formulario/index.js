import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from "react";

// localStorage part
 let itens = localStorage.getItem("itens") || []
 if (itens.length !== 0) 
 {
    itens = JSON.parse(itens);
 }
// localStorage part

const Formulario = (props) => {




    const [nome, setNome] = useState('') //pegando a primeira e segunda posição do array que é devolvido do useState()
    //índice valor será para acessar, e o setValor será usada para atribuir 
    const [receita, setReceita] = useState('')
    const [imagem, setImagem] = useState('')
    const [grupo, setGrupo] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aReceitaCadastrada({
            nome: nome,
            receita: receita,
            imagem: imagem,
            grupo: grupo
        })

        // localStorage part
        let item = {
            nome: nome, 
            receita: receita,
            imagem: imagem,
            grupo: grupo,
        }
         itens.push(item);
         localStorage.setItem("itens", JSON.stringify(itens))
        // localStorage part

        setNome('')
        setReceita('')
        setImagem('')
        setGrupo('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para criar o card da Receita</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome do prato" 
                    placeholder="Digite o nome da receita"
                    valor = {nome}
                    aoAlterado = {valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Receita" 
                    placeholder="Digite o endereço da Receita"
                    valor = {receita}
                    aoAlterado = {valor => setReceita(valor)}
                />
                <CampoTexto 
                    obrigatorio={false} 
                    label="Imagem" 
                    placeholder="Digite o endereço de imagem"
                    valor = {imagem}
                    aoAlterado = {valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    required={false} 
                    label="Refeição" 
                    itens={props.nomeDosGrupos}
                    valor={grupo}
                    aoAlterado = {valor => setGrupo(valor)}
                />
                <div className='secao-botoes'>
                    <Botao type="submit"> Criar Card</Botao>
                    {props.children}

                </div>
                
            </form>
        </section>
    )
}

export default Formulario

