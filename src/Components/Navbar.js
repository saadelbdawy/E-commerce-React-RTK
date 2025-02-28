import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../Features/Cartslice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart ,faHome} from '@fortawesome/free-solid-svg-icons';
import { Link,useNavigate } from 'react-router-dom'; // Import Link
import './navbar.css';
const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Move useNavigate outside

  const [showDropdown, setShowDropdown] = useState(false);
  const cartContainerRef = useRef(null);

  const goToHome = () => {
    navigate("/"); // Correct way to navigate
  };

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartContainerRef.current && !cartContainerRef.current.contains(event.target)) {
        if (cartItems.length === 0) {
          setShowDropdown(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [cartItems.length]);

  return (
    <nav className="navbar">
      <h1>Store</h1>
      <div className="cart-container" ref={cartContainerRef}>
        <FontAwesomeIcon icon={faHome} size="2x" className="home-icon" onClick={goToHome} /> {/* Call goToHome correctly */}
        <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" onClick={handleToggleDropdown} />

        {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}

        {showDropdown && (
          <div className="cart-dropdown">
            {cartItems.length > 0 ? (
              <div>
                <div className="cart-items-container">
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                      <span>{item.title}</span>
                      <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
                    </div>
                  ))}
                </div>
                <button className="clear-cart-btn" onClick={() => dispatch(clearCart())}>
                  Clear Cart
                </button>
                <Link to="/checkout">
                  <button className="checkout-btn">Go to Checkout</button>
                </Link>
              </div>
            ) : (
              <p className="empty-cart">Your cart is empty</p>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
