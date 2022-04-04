import React from 'react';
import './App.css';
import List from './components/List/List';

export interface ItemDetails {
  id: number;
  name: string;
}

const data: ItemDetails[] = [
  {
    id: 1,
    name: 'Typescript',
  },
  {
    id: 2,
    name: 'Javascript',
  },
  {
    id: 3,
    name: 'React',
  }
]

interface AppProps {}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
  
  render() {
    return (
      <div className="App">
        <List data={data} />
      </div>
    );
  }
}

export default App;
