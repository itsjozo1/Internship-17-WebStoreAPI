import React, { useState, useEffect } from 'react';
import UserHeader from '../../components/UserHeader/UserHeader';
import { getAllCartsProducts, getProductById } from '../../searchProducts';
import classes from './index.module.css';

function Cart() {
  const [productCards, setProductCards] = useState([]);

  const handleImage = (image) => {
    if (image || typeof image === 'string') {
      if (image.startsWith('http')) {
        return image;
      }
    }
    return 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';
  };

  useEffect(() => {
    async function createCartProductCard() {
      const cartProducts = await getAllCartsProducts();
      const productCardsPromises = cartProducts.map(async (product) => {
        const productData = await getProductById(product.productId);
        return (
          <div key={product.productId} className={classes.cartProductCard}>
            <img src={handleImage(productData.image)} />
            <div className={classes.productCardDesc}>
              <h1>{productData.title}</h1>
              <h3>{productData.category}</h3>
              <span>Price: {productData.price} €</span>
            </div>
            <span>quantity: {product.quantity}</span>
            <div className={classes.changeQuantityButtonHolder}>
              <button className={classes.changeQuantityButton}>+</button>
              <button className={classes.changeQuantityButton}>-</button>
            </div>
          </div>
        );
      });

      const resolvedProductCards = await Promise.all(productCardsPromises);
      setProductCards(resolvedProductCards);
    }

    createCartProductCard();
  }, []);

  return (
    <>
      <UserHeader />
      <div className={classes.cartContainer}>
        <h1>Cart</h1>
        {productCards}
      </div>
    </>
  );
}

export default Cart;
