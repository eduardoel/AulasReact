export default function OnlyPair(props) {
    const numberPair = props.number % 2 === 0
    return (
        <div>
            {numberPair ? <span>{props.number}</span> : null}
        </div>
    )


    // return numberPair ? <span>{props.number}</span> : null

    // if (props.number % 2 === 0) {
    //     return <h1>{props.number}</h1>
    // } else {
    //     return null
    // }
}