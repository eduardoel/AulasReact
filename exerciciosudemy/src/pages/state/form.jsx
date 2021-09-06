import { useState } from "react"

export default function form() {
    const [valueInput, setValue] = useState("")

    function changeInput() {
        setValue(valueInput + "!")
    }

    return(
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <span>{valueInput}</span>
            <input type="text" value={valueInput} 
                onChange={e => setValue(e.target.value)} 
            />
            <button onClick={changeInput}>Change</button>
        </div>
    )
}