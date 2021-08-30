function gerarLista(final) {
    const lista = []
    for(let i = 1; i <= final; i++ ) {
        lista.push(<span>{i},</span>)
    }
    return lista
}

export default function list() {
    return(
        <div>
            <div>
                {gerarLista(20)}
            </div>
            <div>
                {gerarLista(60)}
            </div>
            <div>
                {gerarLista(50)}
            </div>
        </div>
    )
}