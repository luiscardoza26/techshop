import { getModel } from '../utils/images';

export const models = [
    {
        name: "Smartphone Pro Max",
        modelUrl: getModel('smartphone'),
        description: "Experimenta el futuro de la tecnología móvil con nuestro smartphone más avanzado",
        features: ["Pantalla AMOLED", "Cámara 108MP", "5G"]
    },
    {
        name: "Laptop Ultra",
        modelUrl: getModel('laptop'),
        description: "Potencia y elegancia en un diseño ultradelgado",
        features: ["Intel i9", "32GB RAM", "RTX 4080"]
    }
]