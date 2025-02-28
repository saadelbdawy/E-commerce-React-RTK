// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Order from './Pages/Order';
import Products from './Pages/Products';
import Homepage from './Pages/Homepage';
const App = () => {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />             
        <Route path="/order" element={<Order />} />
        <Route path="/products" element={<Products/>} />
      </Routes>
    </Router>
  );
};

export default App;
