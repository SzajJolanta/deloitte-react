import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Btn from './components/Btn/Btn';
import translations from './translations';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      {translations.HOME.WELCOME_MSG}
      <button onClick={() => setIsVisible(!isVisible)}>hide / show btn</button>
      {isVisible && <Btn />}
    </div>
  );
}

export default App;
