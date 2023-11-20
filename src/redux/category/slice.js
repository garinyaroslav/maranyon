import { createSlice } from '@reduxjs/toolkit';
import { fetchProdByCategory } from './asyncActions';

const initialState = {
  products: [],
  status: 'loading',
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProdByCategory.pending, (state) => {
      state.products = [];
      state.status = 'loading';
    });
    builder.addCase(fetchProdByCategory.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchProdByCategory.rejected, (state) => {
      state.products = [];
      state.status = 'error';
    });
  },
});

export default categorySlice.reducer;
