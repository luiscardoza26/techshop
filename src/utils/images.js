function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { 
      // Extract filename without extension
      const fileName = item.replace('./', '').replace(/\.[^/.]+$/, '');
      images[fileName] = r(item); 
    });
    return images;
  }
  
  // Import all images with common image formats
  const productsImages = importAll(require.context(
    '../assets/images/products',
    false,
    /\.(png|jpe?g|svg|gif|webp|avif|bmp|ico|tiff?)$/i
  ));
  
  const heroImages = importAll(require.context(
    '../assets/images/hero',
    false,
    /\.(png|jpe?g|svg|gif|webp|avif|bmp|ico|tiff?)$/i
  ));

  const logoImage = importAll(require.context(
    '../assets/images/logo',
    false,
    /\.(png|jpe?g|svg|gif|webp|avif|bmp|ico|tiff?)$/i
  ));

  // Import 3D models
  const models = importAll(require.context(
    '../../public/models',
    false,
    /\.(glb|gltf)$/i
  ));
  
  export const images = {
    products: productsImages,
    hero: heroImages,
    logo: logoImage,
    models: models,
  };
  
  export const getProductImage = (imageName) => {
    return images.products[imageName];
  };
  
  export const getHeroImage = () => {
    // Get the first hero image found
    const heroImageKey = Object.keys(images.hero)[0];
    return images.hero[heroImageKey];
  };

  export const getLogo = () => {
    const logoKey = Object.keys(images.logo)[0];
    return images.logo[logoKey];
  };

  export const getModel = (name) => {
    return `/models/${name}.glb`;
  };  