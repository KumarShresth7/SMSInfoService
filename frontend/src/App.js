// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Subscribe from './components/Subscribe';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Import the Footer component

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Subscribe />
        <Testimonial />
        <Contact />
        <Footer /> {/* Add Footer component here */}
      </div>
    </Router>
  );
};

export default App;
