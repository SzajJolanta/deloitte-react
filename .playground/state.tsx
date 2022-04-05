import React from 'react'

interface BtnProps {
    type: "button" | "submit" | "reset";
    title: string;
}

interface BtnState {
    counter: number;
}

const BtnObj = {
    clickHandler: function() {}
}

class Btn extends React.Component<BtnProps, BtnState> {
    static defaultProps = {
        type: "button",
        title: "Kliknij mnie!"
    }

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            clicks: 0,
        }
    }

    clickHandler() {
        this.setState({ clicks: clicks + 1})
    }

    changeCounter() {
        this.setState((prevState) => ({ counter: prevState.counter + 1 }))
    }

    render() {
        return (
            <div>
                <p>Kliknięto {this.state.counter} razy!</p>
                <button
                    type={this.props.type}
                    onClick={this.changeCounter.bind(this)}
                >
                    {this.props.title}
                </button>
            </div>
        )
    }
}

class App3 extends React.Component {
    render() {
        return <Btn />
    }
}


const btn = document.getElementById('btn');

btn.addEventListener('click', function(event) {
    console.log(this);
})
