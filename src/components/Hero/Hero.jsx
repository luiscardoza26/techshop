import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './Hero.css';
import { getHeroImage } from '../../utils/images';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Descubre la Última Tecnología</h1>
          <p>Productos innovadores que transformarán tu vida digital</p>
          <div className="hero-buttons">
            <Link
              to="products"
              smooth={true}
              duration={500}
              className="primary-btn"
            >
              Ver Productos
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="secondary-btn"
            >
              Contáctanos
            </Link>
          </div>
        </motion.div>

        <motion.div
            className="floating-device"
            style={{
              backgroundImage: `url(${getHeroImage()})`,
              transformOrigin: 'center center',
            }}
            animate={{ 
              rotateY: [0, 10, 0],
              rotateX: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="image-shine"
              animate={{
                opacity: [0, 0.5, 0],
                x: [-100, 300],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2
              }}
            />
        </motion.div>
      </div>

      <div className="hero-scroll-indicator">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <span className="scroll-arrow"></span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;