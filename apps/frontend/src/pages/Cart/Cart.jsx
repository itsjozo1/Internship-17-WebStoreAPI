import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserHeader from '../../components/UserHeader/UserHeader';
import {
  deleteCartProduct,
  getAllCartsProducts,
  getProductById,
  updateCartProduct,
} from '../../searchProducts';
import classes from './index.module.css';

function Cart() {
  const navigate = useNavigate();
  const [productCards, setProductCards] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function createCartProductCards() {
      const cartProducts = await getAllCartsProducts();
      if (cartProducts.length === 0) {
        setProductCards(<p>No products in cart</p>);
        setLoading(false);
        return;
      }

      const productCardsPromises = cartProducts.map(async (product) => {
        const productData = await getProductById(product.productId);
        console.log(productData);
        const productQuantity =
          quantities[product.productId] || product.quantity;

        return (
          <div
            key={product.productId}
            className={classes.cartProductCard}
            onClick={() => {
              navigate(`/products/${product.id}`, { state: { product } });
            }}
          >
            <img src={handleImage(productData.image)} alt={productData.title} />
            <div className={classes.productCardDesc}>
              <h1>{productData.title}</h1>
              <h3>{productData.category}</h3>
              <span>Price: {productData.price} €</span>
            </div>
            <div className={classes.quantityContainer}>
              <span>Quantity: {productQuantity}</span>
              <div className={classes.changeQuantityButtonHolder}>
                <button
                  className={classes.changeQuantityButton}
                  onClick={() =>
                    handleQuantityChange(product.id, productQuantity + 1)
                  }
                >
                  +
                </button>
                <button
                  className={classes.changeQuantityButton}
                  onClick={() =>
                    handleQuantityChange(product.id, productQuantity - 1)
                  }
                >
                  -
                </button>
              </div>
            </div>
          </div>
        );
      });

      const resolvedProductCards = await Promise.all(productCardsPromises);
      setProductCards(resolvedProductCards);
      setLoading(false);
    }

    createCartProductCards();
  }, [quantities]);

  const handleImage = (image) => {
    if (image && typeof image === 'string' && image.startsWith('http')) {
      return image;
    }
    return 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';
  };

  const handleQuantityChange = (cartProductId, newQuantity) => {
    updateCartProduct(cartProductId, newQuantity);
    if (newQuantity <= 0) {
      deleteCartProduct(cartProductId);
      setQuantities({ ...quantities, [cartProductId]: 0 });
      return;
    }
    setQuantities({ ...quantities, [cartProductId]: newQuantity });
  };

  return (
    <>
      <UserHeader />
      <div className={classes.cartContainer}>
        <h1>Cart</h1>
        {loading ? <p>Loading...</p> : productCards}
      </div>
    </>
  );
}

export default Cart;
