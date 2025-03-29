import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Features from './components/Features/Features';
import ThreeD from './components/ThreeD/ThreeD';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import FloatingActionButton from './components/Common/FloatingActionButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/variables.css';
import './styles/reset.css';
import './styles/animations.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Products />
        <Features />
        <ThreeD />
        <Contact />
        <Footer />
        <FloatingActionButton />
      </div>
    </Router>
  );
}

export default App;