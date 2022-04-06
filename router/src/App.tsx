import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home';
import Article from './pages/Article';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/article/:id' element={<Article />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
