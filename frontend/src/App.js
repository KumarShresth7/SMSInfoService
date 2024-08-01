import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Loader from './components/OurLoader';

const ScrollToSection = ({ scrollTo }) => {
  useEffect(() => {
    if (scrollTo) {
      const { scroller } = require('react-scroll');
      scroller.scrollTo(scrollTo, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }
  }, [scrollTo]);

  return null;
};

const App = () => {
  const location = useLocation();
  const { state } = location;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Navbar />
      <ScrollToSection scrollTo={state?.scrollTo} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
