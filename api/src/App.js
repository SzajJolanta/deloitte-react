import React, { useState } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import ContactPage from './pages/Contact';
import Article from './pages/Article';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/Home';
import PostCodePage from './pages/PostCode';
import CheckPostCodePage from './pages/CheckPostCode';
import Error from './components/Error/Error';

function App() {
  const [isError, setIsError] = useState(false)

  const handleError = () => {
    setIsError(true);

    setTimeout(() => {
      setIsError(false);
    }, 3000);
  }

  return (
    <Router>
      <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/article/:id' element={<Article />} />
            <Route path='/postcode' element={<PostCodePage handleError={handleError} />} />
            <Route path="/check-postcode" element={<CheckPostCodePage />} />
          </Routes>
      </div>
      <Footer />
      {isError && <Error />}
    </Router>
  );
}

export default App;
