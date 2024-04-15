import React, { useState, useEffect } from 'react';
import UserHeader from '../../components/UserHeader/UserHeader';
import {
  getAllOrdersByUserId,
  getProductById,
  getProductOrdersByOrder,
} from '../../searchProducts';
import classes from './index.module.css';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orders = await getAllOrdersByUserId();
        const ordersWithProducts = await Promise.all(
          orders.map(async (order) => {
            const productOrders = await getProductOrdersByOrder(order.id);
            const products = await Promise.all(
              productOrders.map(async (productOrder) => {
                const product = await getProductById(productOrder.productId);
                console.log({ ...product, quantity: productOrder.quantity });
                return { ...product, quantity: productOrder.quantity };
              }),
            );
            return { ...order, products };
          }),
        );
        setOrders(ordersWithProducts);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <UserHeader />
      <h1 className={classes.headline}>Orders</h1>
      <div className={classes.ordersContainer}>
        {orders.map((order) => (
          <div key={order.id} className={classes.orderContainer}>
            <h2>Order ID: {order.id}</h2>
            <p>Order Date: {order.createdAt}</p>
            <p>Order Status: {order.status}</p>
            <p>Total Price: {order.total}$</p>
            <div className={classes.products}>
              {order.products.map((product, index) => (
                <div key={index} className={classes.productContainer}>
                  <h3>{product.title}</h3>
                  <p>Price: {product.price}$</p>
                  <p>Quantity: {product.quantity}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Orders;
