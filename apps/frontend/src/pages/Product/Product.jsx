import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getProducts } from '../../searchProducts.js';
import classes from './index.module.css';
import Header from '../../components/Header/Header.jsx';
import CartButton from '../../components/CartButton/CartButton.jsx';

const Product = () => {
  const { state } = useLocation();
  const product = state.product;
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const navigate = useNavigate();

  const handleImage = (image) => {
    if (image || typeof image === 'string') {
      if (image.startsWith('http')) {
        return image;
      }
    }
    return 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';
  };

  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      try {
        let fetchedProducts = await getProducts(product.category, 4);
        if (fetchedProducts.length < 4) {
          fetchedProducts = await getProducts(null, 4);
        }
        const filteredProducts = fetchedProducts.filter(
          (product) => product.id !== state.product.id,
        );
        setRecommendedProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching recommended products:', error);
      }
    };

    fetchRecommendedProducts();
  }, [product.category, state.product.id]);

  const handleClick = (product) => {
    navigate(`/products/${product.id}`, { state: { product } });
  };

  return (
    <>
      <Header />
      <div className={classes.productPage}>
        <div className={classes.productPagePreview}>
          <img src={handleImage(product.image)} alt={product.title} />
          <div className={classes.productPageDesc}>
            <h1>{product.title}</h1>
            <h3>{product.category + ' '}</h3>
            <p>Price: {product.price} €</p>
            <p>{product.description}</p>
            <CartButton />
          </div>
        </div>
        <div className={classes.recommendedProductsContainer}>
          <h2>Recommended products</h2>
          {recommendedProducts.map((product) => (
            <div
              key={product.id}
              className={classes.recommendedProductCard}
              onClick={() => handleClick(product)}
            >
              <img src={handleImage(product.image)} alt={product.title} />
              <h3>{product.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
