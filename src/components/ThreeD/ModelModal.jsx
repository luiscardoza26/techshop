import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { Model } from './ThreeD';
import './ModelModal.css';

const ModelModal = ({ model, onClose }) => {
  return (
    <div className="model-modal-overlay" onClick={onClose}>
      <div className="model-modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>&times;</button>
        <h2>{model.name}</h2>
        <div className="modal-model-viewer">
          <Canvas
            shadows
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true, antialias: true }}
            camera={{
              position: [0, 0, 5],
              fov: 45,
              near: 0.1,
              far: 1000
            }}
            key={`modal-${model.modelUrl}`}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.7} />
              <directionalLight
                position={[5, 5, 5]}
                intensity={1}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
              />
              <spotLight
                position={[-5, 5, 5]}
                angle={0.15}
                penumbra={1}
                intensity={0.8}
                castShadow
              />
              <group position={[0, -0.8, 0]}>
                <Model url={model.modelUrl} />
              </group>
              <Environment preset="studio" />
              <OrbitControls
                enablePan={true}
                enableZoom={true}
                minDistance={2}
                maxDistance={7}
                minPolarAngle={0}
                maxPolarAngle={Math.PI}
                enableDamping={true}
                dampingFactor={0.05}
                rotateSpeed={0.5}
                zoomSpeed={0.8}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default ModelModal;