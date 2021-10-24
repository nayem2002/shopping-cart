import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/ProductSlice';
import cartReducer from '../features/CartSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});
