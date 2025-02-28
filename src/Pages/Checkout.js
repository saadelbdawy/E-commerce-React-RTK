import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveOrder } from '../Features/Orderslice'; // Redux action to save order
import './checkout.css';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userDetails, setUserDetails] = useState({
    name: '',
    address: '',
    phone: '',
    cardNumber: '',
  });

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    if (!userDetails.name || !userDetails.address || !userDetails.phone || !userDetails.cardNumber) {
      alert('Please fill in all fields.');
      return;
    }

    // Save order details to Redux
    dispatch(saveOrder({ cartItems, totalPrice, userDetails }));

    navigate('/order'); // Redirect to Order page
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Go back to <Link to="/">shopping</Link>.</p>
      ) : (
        <div>
          <h3>Cart Items</h3>
          <div className="checkout-items">
            {cartItems.map((item) => (
              <div key={item.id} className="checkout-item">
                <h4>{item.title}</h4>
                <p>{item.price} USD</p>
              </div>
            ))}
          </div>
          <div className="total-price">
            <h3>Total: {totalPrice} USD</h3>
          </div>

          {/* Checkout Form */}
          <div className="checkout-form">
            <input type="text" name="name" placeholder="Full Name" value={userDetails.name} onChange={handleChange} required />
            <input type="text" name="address" placeholder="Shipping Address" value={userDetails.address} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone Number" value={userDetails.phone} onChange={handleChange} required />
            <input type="text" name="cardNumber" placeholder="Credit Card Number" value={userDetails.cardNumber} onChange={handleChange} required />
          </div>

          <button className="place-order-btn" onClick={handleCheckout}>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
