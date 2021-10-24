import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fatchProduct = createAsyncThunk(
  'product/fatchProduct',
  async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    return res.data;
  }
);

const initialState = {
  product: [],
  staus: null,
};

const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [fatchProduct.pending]: (state, { payload }) => {
      state.staus = 'panding';
    },
    [fatchProduct.fulfilled]: (state, { payload }) => {
      state.staus = 'success';
      state.product = payload;
    },
    [fatchProduct.rejected]: (state, { payload }) => {
      state.staus = 'rejected';
    },
  },
});

export default ProductSlice.reducer;
