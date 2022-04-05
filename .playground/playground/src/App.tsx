import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Btn from './components/Btn/Btn';
import translations from './translations';
import Projects from './components/Projects/Projects';

const data = [
  { id: 1, name: 'Abc'},
  { id: 2, name: 'Def'}
]

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      {translations.HOME.WELCOME_MSG}
      <Projects projects={data} />
      <button onClick={() => setIsVisible(!isVisible)}>hide / show btn</button>
      {isVisible && <Btn />}
    </div>
  );
}

export default App;
