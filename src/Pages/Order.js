import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Order.css';

const Order = () => {
  const order = useSelector((state) => state.order);

  if (!order || !order.cartItems.length) {
    return (
      <div className="order-container">
        <h2>No Order Found</h2>
        <p>Go back to <Link to="/">shopping</Link>.</p>
      </div>
    );
  }

  return (
    <div className="order-container">
      <h2>Order Confirmation</h2>
      <h3>Order Details</h3>
      <div className="order-items">
        {order.cartItems.map((item) => (
          <div key={item.id} className="order-item">
            <h4>{item.title}</h4>
            <p>{item.price} USD</p>
          </div>
        ))}
      </div>
      <div className="order-summary">
        <h3>Total: {order.totalPrice} USD</h3>
        <h3>Shipped to:</h3>
        <p>{order.userDetails.name}</p>
        <p>{order.userDetails.address}</p>
        <p>Phone: {order.userDetails.phone}</p>
      </div>
      <Link to="/" className="back-home">Back to Home</Link>
    </div>
  );
};

export default Order;
