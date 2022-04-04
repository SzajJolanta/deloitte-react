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


const data = [ 1, 2, 3 ];

class List extends React.Component {
    render() {
        if (!this.props.shouldRender) {
            return null;
        }

        return (
            <div className={this.props.className}>
                {
                    this.props.items.map(item => <span>{item}</span>)
                }
            </div>
        )
    }
}

class App2 extends React.Component {
    render() {
        return <List items={data} className="abc" shouldRender={false} />
    }
}

<List2 title="tdad" a="dasd" b="dasd" c={true}/>


const List2 = (props) => {
    return <div title={props.title} a={props.a} b={props.b} c={props.c}></div>

    // return <div {...props}></div>
}
