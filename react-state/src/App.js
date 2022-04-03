import React from 'react';
import './App.css';
import Result from './Result';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clicks: 0
    }
  }

  handleClick(increment) {
    this.setState(prev => ({
      clicks: prev.clicks + increment
    }));
  }

  render() {
    return (
      <div>
        <Result clicks={this.state.clicks} />
        <button onClick={() => this.handleClick(1)}>Kliknij mnie</button>
        <button onClick={() => this.handleClick(5)}>Kliknij mnie +5</button>
      </div>
    );
  }
}

export default App;
