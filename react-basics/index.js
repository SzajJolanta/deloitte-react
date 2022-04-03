import React from 'react';
import ReactDOM from 'react-dom';

const data = [
    {
        id: 1,
        title: 'Rekoncyliacja',
        estimation: 2
    },
    {
        id: 2,
        title: 'Algorytm różnicujący',
        estimation: 3
    },
    {
        id: 3,
        title: 'Inferencja typów',
        estimation: 1
    },
    {
        id: 4,
        title: 'Optymalizacja aplikacji reactowej',
        estimation: 4
    },
]

class ListItem extends React.Component {
    render() {
        return <li style={{
            padding: 10,
            borderBottom: this.props.isLast ? '0' : '2px solid blue'
        }}>{this.props.title} ({this.props.estimation})</li>
    }
}

class List extends React.Component {
    render() {
        return <ul>
            {
                this.props.data
                    .sort((a, b) => {
                        if (a.estimation < b.estimation) {
                            return 1;
                        } 
                        return -1
                    })
                    .map((item, index) => <ListItem {...item} isLast={index === this.props.data.length - 1} />)
            }
        </ul>
    }
}

class App extends React.Component {
    render() {
        return <div style={{ fontFamily: 'sans-serif' }}>
            <h1>Lista tematów do rozpoznania</h1>
            <List data={data} />    
        </div>
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);