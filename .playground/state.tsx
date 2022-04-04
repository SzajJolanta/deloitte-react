interface BtnProps {
    type: "button" | "submit" | "reset";
    title: string;
}

interface BtnState {
    counter: number;
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
        }
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