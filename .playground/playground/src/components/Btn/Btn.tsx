import React from "react";

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

    constructor(props: BtnProps) {
        super(props);

        this.state = {
            counter: 0,
            // clicks: 0,
        }
    }

    a() {
        this.props // Btn
    }

    componentDidMount() {
        console.log('component Btn is mounted')
        window.addEventListener('resize', this.a.bind(this));
    }

    componentDidUpdate() {
        console.log('component Btn is updated')

    }

    componentWillUnmount() {
        console.log('component Btn is unmounted')
        window.removeEventListener('resize', this.a);
    }

    clickHandler() {
    }

    changeCounter(increment = 1) {
        this.setState((prevState) => ({ counter: prevState.counter + increment }))
    }

    render() {
        return (
            <div>
                <p>Kliknięto {this.state.counter} razy!</p>
                <button
                    type={this.props.type}
                    onClick={() => this.changeCounter()}
                >
                    {this.props.title}
                </button>
                <button
                    type={this.props.type}
                    onClick={() => this.changeCounter(5)}
                >
                    {this.props.title} Zmienia o 5
                </button>
            </div>
        )
    }
}

export default Btn