function Evento(){

    function meuEvento() {
        console.log('Opa! Fui disparado')
    }


    return(
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>Clique aqui</button>
        </div>
    )
}

export default Evento