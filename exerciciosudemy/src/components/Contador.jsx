import { Component } from "react";

export default class Counter extends Component {

    state = {
        number: this.props.initialValue ?? 0,
        step: this.props.step ?? 1
    }

    inc = () => {
        this.setState({
            number: this.state.number + this.state.step
        })
    }

    dec = () => {
        this.setState({
            number: this.state.number - this.state.step
        })
    }

    changeStep = (ev) => {
        this.setState({step: +ev.target.value})
    }

    renderForm() {
        return(
            <>
                <input type="number" min={1} max={100000} 
                    value={this.state.step}
                    onChange={this.changeStep} />
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </>
        )
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <h2>{this.state.number}</h2>
                {this.renderForm()}
            </div>
        )
    }
}