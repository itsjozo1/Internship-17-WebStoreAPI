import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import classes from './index.module.css';

async function handleAddToCart() {}

function CartButton() {
  return (
    <>
      <button className={classes.cartButtonContainer} onClick={handleAddToCart}>
        Add to cart
        <ShoppingCartIcon className={classes.cartIcon} />
      </button>
    </>
  );
}

export default CartButton;
