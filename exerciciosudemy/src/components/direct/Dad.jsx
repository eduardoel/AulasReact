import Son from "./Son";

export default function Dad(props) {
    return (
        <div>
            <Son name="Eduardo" family= {props.family}/>
            <Son name="Arnnildo" family= {props.family}/>
            <Son name="Claudenice" family= {props.family}/>
        </div>
    )
}