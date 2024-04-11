import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import classes from './index.module.css';
import { useState } from 'react';
import { getCartProducts } from '../../searchProducts.js';

function CartButton(productId) {
  const [cartProducts, setCartProducts] = useState(undefined);

  const initialCartProducts = async () => {
    const cartProducts = await getCartProducts(productId.productId);
    setCartProducts(cartProducts);
  };
  if (cartProducts === undefined || cartProducts === cartProducts) {
    initialCartProducts();
  }

  const handleAddToCart = async () => {
    setCartProducts(!cartProducts);
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      alert('Please log in to add items to the cart');
      return;
    }
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    getCartProducts(productId.productId, cart.cartId);
    fetch('/api/cart-products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        productId: productId.productId,
        cartId: cart.cartId,
        quantity: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error('Error adding product to cart:', error);
      });
  };

  return (
    <>
      <button className={classes.cartButtonContainer} onClick={handleAddToCart}>
        {cartProducts ? 'Add to cart' : 'Remove from cart'}
        <ShoppingCartIcon className={classes.cartIcon} />
      </button>
    </>
  );
}

export default CartButton;
