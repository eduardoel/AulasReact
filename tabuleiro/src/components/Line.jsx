import styles from '../styles/line.module.css'
import Divisao from "./Divisao";

export default function Line(props) {
    return(
        <div className={styles.line}>
            <Divisao preta={props.preta} />
            <Divisao preta={!props.preta} />
            <Divisao preta={props.preta} />
            <Divisao preta={!props.preta} />
            <Divisao preta={props.preta} />
            <Divisao preta={!props.preta} />
            <Divisao preta={props.preta} />
            <Divisao preta={!props.preta} />
        </div>
    )
}