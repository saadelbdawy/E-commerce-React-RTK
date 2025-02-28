// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Cartslice';
import orderReducer from './Orderslice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer
  },
});

export default store;
