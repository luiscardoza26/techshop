import React from 'react';
import { Link } from 'react-scroll';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>TechStore</h3>
          <p>Tu destino para la mejor tecnología</p>
          <div className="social-links">
            <a href="." className="social-link"><FaFacebook /></a>
            <a href="." className="social-link"><FaTwitter /></a>
            <a href="." className="social-link"><FaInstagram /></a>
            <a href="." className="social-link"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><Link to="home" smooth={true} duration={500}>Inicio</Link></li>
            <li><Link to="products" smooth={true} duration={500}>Productos</Link></li>
            <li><Link to="features" smooth={true} duration={500}>Características</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Productos</h4>
          <ul>
            <li>Smartphones</li>
            <li>Laptops</li>
            <li>Tablets</li>
            <li>Accesorios</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <ul className="contact-info">
            <li>📍 123 Tech Street, Ciudad</li>
            <li>📞 +1 234 567 890</li>
            <li>✉️ info@techstore.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 TechStore. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href=".">Política de Privacidad</a>
          <a href=".">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;