export default function Repetition() {
    const approvedList = [
        'Maria',
        'Ana',
        'Lucas',
        'Pedro',
        'Matheus',
        'Eduardo',
        'Luana'
    ]

    function renderList() {
        return approvedList.map((name, i) => <li key={i}>{name}</li>)
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}




// function renderList() {
//     const itens = []

//     for (let i = 0; i < approvedList.length; i++) {
//         itens.push(<li key={i}>{approvedList[i]}</li>)
        
//     }

//     return itens
// }