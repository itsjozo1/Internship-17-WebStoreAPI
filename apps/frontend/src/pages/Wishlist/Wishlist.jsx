import UserHeader from '../../components/UserHeader/UserHeader';
import {
  deleteWishlistProduct,
  getProductById,
  getWishlistProducts,
} from '../../searchProducts';
import { useEffect, useState } from 'react';
import classes from './index.module.css';

function Wishlist() {
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const fetchWishlistProducts = async () => {
    const products = await getWishlistProducts();

    const updatedProducts = await Promise.all(
      products.map(async (product) => {
        const productData = await getProductById(product.productId);
        return {
          ...product,
          title: productData.title,
          category: productData.category,
          price: productData.price,
        };
      }),
    );

    setWishlistProducts(updatedProducts);
  };
  useEffect(() => {
    fetchWishlistProducts();
  }, []);

  const handleDeleteWishlistProduct = (id) => {
    deleteWishlistProduct(id)
      .then(() => {
        // After deletion, fetch updated wishlist products
        fetchWishlistProducts();
      })
      .catch((error) => {
        console.error('Error deleting wishlist product:', error);
      });
  };

  const createWishlistProductCard = () => {
    if (wishlistProducts.length !== 0) {
      return wishlistProducts.map((product) => (
        <div
          key={product.productId}
          className={classes.wishlistProductContainer}
        >
          <div>
            <h1>{product.title}</h1>
            <h3>{product.category}</h3>
            <span>Price: {product.price} €</span>
          </div>
          <button
            className={classes.deleteWishlistProductButton}
            onClick={() => handleDeleteWishlistProduct(product.id)}
          >
            X
          </button>
        </div>
      ));
    }
    return <h3>No products in wishlist</h3>;
  };

  return (
    <>
      <UserHeader />
      <div className={classes.wishlistContainer}>
        <h1>Wishlist</h1>
        {createWishlistProductCard()}
      </div>
    </>
  );
}

export default Wishlist;
