import styles from '../styles/Divisao.module.css'

export default function Divisao(props) {
    return (
    <div 
        style={{
            backgroundColor: props.preta ? "#000" : "#fff"
        }}
        className={styles.Divisao}>

    </div>
    )
}