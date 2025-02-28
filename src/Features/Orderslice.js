import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: { cartItems: [], totalPrice: 0, userDetails: {} },
  reducers: {
    saveOrder: (state, action) => {
      state.cartItems = action.payload.cartItems;
      state.totalPrice = action.payload.totalPrice;
      state.userDetails = action.payload.userDetails;
    },
  },
});

export const { saveOrder } = orderSlice.actions;
export default orderSlice.reducer;
