import { useState } from "react"

export default function  mouse() {

    // React Hooks
    const [x, setX] = useState(0)

    const arrayY = useState(0)
    let y = arrayY[0]
    const setY = arrayY[1]

    const styleDivMouse = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh",

    }

    function whenToMove(ev) {
        setX(ev.clientX)
        setY(ev.clientY)
    }

    return(
        <div style={styleDivMouse} onMouseMove={whenToMove}>
            <span>Axle X: {x} </span>
            <span>Axle y: {y} </span>
        </div>
    )
}