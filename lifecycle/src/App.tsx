import React from 'react';
import './App.css';
import Input from './components/Input';

interface AppState {
  isVisible: boolean;
}

class App extends React.Component<{}, AppState> {
  public state = {
    isVisible: false
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ isVisible: !this.state.isVisible})}>Włącz / wyłącz pole</button>
        {this.state.isVisible && <Input id="abc" />}
      </div>
    );
  }
}

export default App;
