import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import { getLogo } from '../../utils/images';

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Height of the fixed header
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <img 
            src={getLogo()} 
            alt="Logo" 
            className="logo-image"
            onClick={() => scrollToSection('home')}
          />
          <h1>TechStore</h1>
        </div>
        <nav>
          <ul>
            <li><Link to="home" smooth={true} duration={500}>Inicio</Link></li>
            <li><Link to="products" smooth={true} duration={500}>Productos</Link></li>
            <li><Link to="features" smooth={true} duration={500}>Características</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;