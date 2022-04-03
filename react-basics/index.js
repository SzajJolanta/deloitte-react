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

class App extends React.Component {
    render() {
        return <div>Lista tematów do rozpoznania</div>
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);