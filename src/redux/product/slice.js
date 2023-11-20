import { createSlice } from '@reduxjs/toolkit';

import { fetchProducts } from './asyncActions';

const initialState = {
  items: [],
  status: 'loading',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.items = [];
      state.status = 'loading';
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.items = [];
      state.status = 'error';
    });
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
