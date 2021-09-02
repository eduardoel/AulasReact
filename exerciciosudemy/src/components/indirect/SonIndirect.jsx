export default function SonIndirect(props) {

    console.log(props.callFunction)
    return (
        <div>
            <h1>Son</h1>
            <button onClick={props.callFunction}>Talk to the father 01</button>
            <button onClick={() => props.callFunction("I was approved", "thanks", 100)}>Talk to the father 02</button>
        </div>
    )
}