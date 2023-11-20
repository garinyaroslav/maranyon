import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const url = new URL(process.env.REACT_APP_MOK_URL);
  const { data } = await axios.get(url);
  return data;
});
