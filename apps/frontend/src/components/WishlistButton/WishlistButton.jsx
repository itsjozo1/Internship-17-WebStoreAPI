import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import classes from './index.module.css';
import { getWishlistProduct } from '../../searchProducts';
import { useState } from 'react';

const WishlistButton = (productId) => {
  const [isInWishlist, setIsinWishlist] = useState(false);

  const getInitialWishlistItem = async () => {
    const wishlistproduct = await getWishlistProduct(productId.productId);
    wishlistproduct === false ? setIsinWishlist(false) : setIsinWishlist(true);
  };

  getInitialWishlistItem();

  const handleAddToWishlist = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    if (!user) {
      alert('Please log in to add items to the wishlist');
      return;
    }

    fetch(`/api/wishlist-products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        productId: productId.productId,
        wishlistId: wishlist.wishlistId,
        quantity: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.error(data.message);
        }
      })
      .catch((error) => {
        console.error('Error adding to wishlist:', error);
      });
    setIsinWishlist(!isInWishlist);
  };
  return (
    <>
      <button
        className={classes.notInWishlistButton}
        onClick={handleAddToWishlist}
      >
        {isInWishlist === false ? <FavoriteBorderIcon /> : <FavoriteIcon />}
      </button>
    </>
  );
};

export default WishlistButton;
