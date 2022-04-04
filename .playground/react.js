class Button extends React.Component {
    render() {
        return (
            <button type={this.props.type} className="btn btn-primary">
                <span>Kliknij mnie!</span>
            </button>
        )
        // return (
        //     React.createElement(
        //         'button', 
        //         null, 
        //         React.createElement(
        //             'span', 
        //             null, 
        //             'Kliknij mnie'
        //         )
        //     )
        // )
    }
}

class App extends React.Component {
    render() {
        return <Button type="button"/>
    }
}