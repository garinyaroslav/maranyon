import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setIsOpen } = cartSlice.actions;
export default cartSlice.reducer;
