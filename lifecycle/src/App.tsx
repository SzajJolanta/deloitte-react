import React from 'react';
import './App.css';
import Input from './components/Input';

class App extends React.Component {
  state: any = {
    isVisible: false
  }

  render() {
    return (
      <div>
        {this.state.isVisible && <Input id="abc" />}
      </div>
    );
  }
}

export default App;
