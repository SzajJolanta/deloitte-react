import React from "react";

class Result extends React.Component {
    render() {
        return (
            <p>Kliknięto w przycisk {this.props.clicks} razy</p>
        )
    }
}

export default Result;
