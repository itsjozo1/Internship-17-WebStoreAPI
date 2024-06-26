import {
  getAllCartsProducts,
  deleteCartProduct,
  getProductById,
  postOrder,
  postOrderProducts,
} from '../../searchProducts';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CloseOrderButton = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const navigate = useNavigate();

  const getCartProductsData = async () => {
    const products = await getAllCartsProducts();
    console.log(products);
    setCartProducts(products);
  };

  useEffect(() => {
    getCartProductsData();
  }, []);

  const handleCloseOrder = async () => {
    const finalCartProducts = await getAllCartsProducts();
    let total = 0;
    console.log(finalCartProducts);
    for (const product of finalCartProducts) {
      try {
        const productData = await getProductById(product.productId);
        total += productData.price * product.quantity;
        console.log(productData.price, product.quantity);
        await deleteCartProduct(product.id);
      } catch (error) {
        console.error('Error handling product:', error);
      }
    }

    setCartProducts([]);
    const order = await postOrder(total);
    console.log(order);
    for (const product of finalCartProducts) {
      try {
        await postOrderProducts(order.id, product.productId, product.quantity);
        alert('Order completed');
      } catch (error) {
        console.error('Error deleting cart product:', error);
      }
    }
    navigate('/orders');
  };

  if (cartProducts.length > 0) {
    return <button onClick={handleCloseOrder}>Close Order</button>;
  }

  return null;
};

export default CloseOrderButton;
