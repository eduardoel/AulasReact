function generateList(final) {
    const list = []
    for(let i = 1; i <= final; i++ ) {
        list.push(<span>{i},</span>)
    }
    return list
}

export default function list() {
    return(
        <div>
            <div>
                {generateList(20)}
            </div>
            <div>
                {generateList(60)}
            </div>
            <div>
                {generateList(50)}
            </div>
        </div>
    )
}