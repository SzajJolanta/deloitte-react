import React from "react";

class Input extends React.Component {
    state: any = {
        value: '',
    }

    render() {
        return <input type="text" value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })}/> 
    }
}

export default Input;