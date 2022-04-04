import React from "react";

interface InputProps {
    id: string;
}

interface InputState {
    value: string;
}

class Input extends React.Component<InputProps, InputState> {
    public state = {
        value: '',
    }

    componentDidMount() {
        alert('mount' + this.props.id)
    }

    componentDidUpdate() {
        alert('update' + this.props.id)
    }

    componentWillUnmount() {
        alert('unmount' + this.props.id)
    }

    render() {
        return <input type="text" value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })}/> 
    }
}

export default Input;