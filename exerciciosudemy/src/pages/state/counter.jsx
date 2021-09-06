import { useState } from "react"
import CounterDisplay from "../../components/counterDisplay"

export default function counter() {

    const [valueCounter, setvalueCounter] = useState(0)

    const increment = () => setvalueCounter(valueCounter + 1)

    function decrement(ev) {
        setvalueCounter(valueCounter - 1)

    }


    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>Counter</h1>
            <CounterDisplay valueCounter={valueCounter}/>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </div>
   ) 
}