import React, { Suspense, useState, useEffect, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModelModal from './ModelModal';
import './ThreeD.css';
import { models } from '../../data/threed';

export function Model({ url, isPreview = false }) {
  const { scene } = useGLTF(url);
  
  useEffect(() => {
    useGLTF.preload(url);
    scene.position.set(0, 0, 0);
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material.roughness = 0.5;
        child.material.metalness = 0.8;
      }
    });
  }, [url, scene]);

  return (
    <primitive 
      object={scene.clone()}
      scale={0.6}
      position={[0, -0.8, 0]}
      rotation={[0, 0, 0]}
      castShadow
      receiveShadow
    />
  );
}

const ThreeD = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleCloseModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  return (
    <section id="three-d" className="three-d-section">
      <div className="three-d-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Explora Nuestros Productos en 3D
        </motion.h2>

        <Slider {...settings} className="models-slider">
          {models.map((model, index) => (
            <motion.div
              key={index}
              className="model-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="model-preview">
                <Canvas
                  shadows
                  camera={{ 
                    position: [0, 0, 5], 
                    fov: 45
                  }}
                  key={`preview-${model.modelUrl}`}
                >
                  <Suspense fallback={null}>
                    <ambientLight intensity={0.7} />
                    <spotLight
                      position={[5, 5, 5]}
                      intensity={1}
                      castShadow
                    />
                    <group position={[0, -0.8, 0]}>
                      <Model url={model.modelUrl} isPreview={true} />
                    </group>
                    <Environment preset="studio" />
                    <OrbitControls
                      enableZoom={false}
                      enablePan={false}
                      autoRotate
                      autoRotateSpeed={2}
                    />
                  </Suspense>
                </Canvas>
              </div>
              <div className="model-info">
                <h3>{model.name}</h3>
                <p>{model.description}</p>
                <ul className="features-list">
                  {model.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button 
                  className="view-3d-btn"
                  onClick={() => setSelectedProduct(model)}
                >
                  Ver Modelo 3D
                </button>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
      
      {selectedProduct && (
        <ModelModal 
          model={selectedProduct} 
          onClose={handleCloseModal}
          key={selectedProduct.modelUrl}
        />
      )}
    </section>
  );
};

export default ThreeD;