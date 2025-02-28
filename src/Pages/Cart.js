// src/components/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../Features/Cartslice';
import './Cart.css'

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          <button onClick={handleClearCart}>Clear Cart</button>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
