import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Kliknięto w przycisk {this.state.clicks} razy</p>
        <button>Kliknij mnie</button>
      </div>
    );
  }
}

export default App;
