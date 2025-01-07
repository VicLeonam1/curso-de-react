import styles from './Pessoa.module.css'

function Pessoa({nome, idade, profissao, foto}) {
    return (
        <div className = {styles.DivCard}>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa