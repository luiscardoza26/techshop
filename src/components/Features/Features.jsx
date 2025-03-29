import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaMobile, FaLock, FaHeadset } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <FaRocket />,
      title: "Tecnología de Última Generación",
      description: "Productos con las características más avanzadas del mercado"
    },
    {
      icon: <FaMobile />,
      title: "Diseño Innovador",
      description: "Diseños elegantes y funcionales que marcan tendencia"
    },
    {
      icon: <FaLock />,
      title: "Máxima Seguridad",
      description: "Sistemas de seguridad avanzados para tu tranquilidad"
    },
    {
      icon: <FaHeadset />,
      title: "Soporte 24/7",
      description: "Asistencia técnica disponible en todo momento"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Características Destacadas
        </motion.h2>

        <motion.div
          ref={ref}
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;