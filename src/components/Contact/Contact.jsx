import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contáctanos
        </motion.h2>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Información de Contacto</h3>
            <div className="info-item">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p> info@techstore.com</p>
              </div>
            </div>
            <div className="info-item">
              <FaPhone />
              <div>
                <h4>Teléfono</h4>
                <p>+1 234 567 890</p>
              </div>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt />
              <div>
                <h4>Ubicación</h4>
                <p>123 Tech Street, Ciudad</p>
              </div>
            </div>
            <div className="info-item">
              <FaLinkedin />
              <div>
                <h4>LinkedIn</h4>
                <p>TechStore Company</p>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Tu Nombre"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Tu Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Asunto"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tu Mensaje"
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="submit-btn">
              Enviar Mensaje
            </button>
            {isSubmitted && (
              <div className="success-message">
                ¡Mensaje enviado con éxito!
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;