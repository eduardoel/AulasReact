import { useEffect, useState } from "react"
import NumberDisplay from "../../components/NumberDisplay"
import { mega } from "../../functions/mega"

export default function lottery() {

    const [totalBets, setTotalBets] = useState(6)
    const [betNumbers, setBetNumbers] = useState([])

    useEffect(() => {
        setBetNumbers(mega())
    }, [])

    function renderNumbers() {
        return betNumbers.map(
            number => <NumberDisplay key={number} value={number} />
        )
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <h1>Lottery</h1>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
            }}>
                {renderNumbers()}
            </div>
            <div>
                <input type="number" min={6} max={15} value={totalBets}
                    onChange={ev => setTotalBets(+ev.target.value)} />
                <button onClick={() => setBetNumbers(mega(totalBets))}>
                    Generate bets
                </button>
            </div>
        </div>
    )
}