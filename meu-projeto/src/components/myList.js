import Item from "./Item"

function List() {
    return(
        <>
            <p>Minha Lista</p>
            <ul>
                <Item marca="Samsung" ano_lancamento={1997}/>
                <Item marca="Apple" ano_lancamento={1987}/>
                <Item/>
            </ul>
        </>
    )
}

export default List