import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home';
import Article from './pages/Article';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/article/:id' element={<Article />} />
          </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
