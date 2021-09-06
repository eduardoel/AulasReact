import { Component } from "react";
import Contator from "../../components/Contador"

export default class Counter extends Component {

    render() {
        return(
            <Contator initialValue={0} step={1}/>
        )
    }
}