import React from 'react';
import { motion } from 'framer-motion';
import { CardMedia } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Products.css';
import { products } from '../../data/products';

const Products = () => {
  // const [selectedProduct, setSelectedProduct] = useState(null);

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

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const productVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="products" className="products-section">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="products-container"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Nuestros Productos
        </motion.h2>
        <Slider {...settings} className="products-slider">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="product-card"
              variants={productVariants}
              // onClick={() => setSelectedProduct(product)}
            >
              <div className="product-image">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={product.image}
                    alt={product.title}
                    style={{ objectFit: 'cover' }}
                  />
                </motion.div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
                <p className="description">{product.description}</p>
                <ul className="features-list">
                  {product.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  className="buy-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Comprar Ahora
                </motion.button>
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};

export default Products;