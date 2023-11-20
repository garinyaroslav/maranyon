import { configureStore } from '@reduxjs/toolkit';
import productReducer from './product/slice';
import categoriesReducer from './category/slice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    categories: categoriesReducer,
  },
});
