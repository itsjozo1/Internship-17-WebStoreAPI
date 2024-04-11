import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import classes from './index.module.css';
import { useState } from 'react';

function CartButton(productId) {
  const getCartProducts = async (productId) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartId = cart.cartId;
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      return false;
    }
    fetch(`/api/cart-products/${cartId}/${productId}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log(data.message);
        }
        console.log(data);
        let isEmpty = data.length === 0;
        setCartProducts(isEmpty);
      })
      .catch((error) => {
        console.error('Error fetching cart products:', error);
        return false;
      });
  };
  const [cartProducts, setCartProducts] = useState(
    getCartProducts(productId.productId),
  );

  const handleAddToCart = async () => {
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
