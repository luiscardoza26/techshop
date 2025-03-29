import { getProductImage } from '../utils/images';

export const products = [
    {
        id: 1,
        name: "Smartphone Pro Max",
        price: "$999",
        description: "El último smartphone con características de vanguardia",
        image: getProductImage('smartphone'),
        features: ["5G", "Cámara 108MP", "Batería 5000mAh"]
      },
      {
        id: 2,
        name: "Laptop Ultra",
        price: "$1299",
        description: "Potente laptop para profesionales",
        image: getProductImage('laptop'),
        features: ["Intel i9", "32GB RAM", "1TB SSD"]
      },
      {
        id: 3,
        name: "Smartwatch X",
        price: "$199",
        description: "El último smartwatch con funciones avanzadas",
        image: getProductImage('smartwatch'),
        features: ["5G", "Cámara 48MP", "Batería 2000mAh"]
      },
      {
        id: 4,
        name: "Tablet Pro",
        price: "$599",
        description: "Tablet potente para multitareas",
        image: getProductImage('tablet'),
        features: ["10.1 pulgadas", "Cámara 12MP", "Batería 4000mAh"]
      },
      {
        id: 5,
        name: "Headphones Pro",
        price: "$149",
        description: "Los mejores auriculares para disfrutar de música en cualquier momento",
        image: getProductImage('headphones'),
        features: ["Canciones en 4K", "Batería de larga duración", "Cancelación de ruido"] 
      },
      {
        id: 6,
        name: "Smart TV 4K",
        price: "$1999",
        description: "La mejor TV de 4K en el mercado",
        image: getProductImage('tv'),
        features: ["4K Ultra HD", "Conexión 4K", "Batería de larga duración"]
      },
      {
        id: 7,
        name: "Router Wi-Fi",
        price: "$99",
        description: "Router Wi-Fi potente para conectar dispositivos en tu hogar",
        image: getProductImage('router'),
        features: ["Wi-Fi 6", "Conexión inalámbrica", "Batería de larga duración"]
     },
     {
        id: 8,
        name: "Cámara DSLR",
        price: "$499",
        description: "Cámara DSLR potente para capturar momentos especiales",
        image: getProductImage('camera'),
        features: ["Cámara 4K", "Batería de larga duración", "Cancelación de ruido"]
     }
]