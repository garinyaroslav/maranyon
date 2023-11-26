import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  items: [],
  totalPrice: 0,
};

// items.reduce((count, item) => count + item.price * item.count, 0)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (state.items.find((item) => item.id === action.payload.id)) return;
      state.items.push({ ...action.payload, count: 1 });
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    countPrice: (state) => {
      state.totalPrice = state.items.reduce((count, item) => count + item.price * item.count, 0);
    },
    setIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setIsOpen, addItem, removeItem, countPrice } = cartSlice.actions;
export default cartSlice.reducer;
