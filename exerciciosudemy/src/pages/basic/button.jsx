function actionA() {
    console.log("Function outside")
}

export default function button () {
    function actionB() {
        console.log("Function within")
    }

    return (
        <div>
            <button onClick={actionA}>Function outside</button>
            <button onClick={actionB}>Function within</button>
            <button onClick={ function() {
                console.log("Anonymous function")
            }}>Anonymous function</button>
            <button onClick={() => console.log("Arrow function")}>Arrow function</button>
        </div>
    )
}