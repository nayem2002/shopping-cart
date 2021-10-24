import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItem: [],
  cartTotalQuintity: 0,
  cartTotalAmount: 0,
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.cartItem.findIndex((carent) => {
        return carent.id === action.payload.id;
      });
      if (index >= 0) {
        state.cartItem[index].cartQuintity += 1;
      } else {
        const product = { ...action.payload, cartQuintity: 1 };
        state.cartItem.push(product);
      }
    },
    decrementQuintity: (state, action) => {
      const itemIndex = state.cartItem.findIndex((carent) => {
        return carent.id === action.payload.id;
      });

      if (state.cartItem[itemIndex].cartQuintity > 1) {
        state.cartItem[itemIndex].cartQuintity -= 1;
      } else if (state.cartItem[itemIndex].cartQuintity === 1) {
        const newCartItem = state.cartItem.filter((carent) => {
          return carent.id !== action.payload.id;
        });
        state.cartItem = newCartItem;
      }
    },
    removeCart: (state, action) => {
      const newResult = state.cartItem.filter((carent) => {
        return carent.id !== action.payload.id;
      });
      state.cartItem = newResult;
    },
    removeAllProduct: (state, action) => {
      state.cartItem = [];
    },

    getTotal: (state, action) => {
      let { newQuintity, newAmount } = state.cartItem.reduce(
        (acomoletor, carentItem) => {
          const { price, cartQuintity } = carentItem;

          const itemsTotal = price * cartQuintity;

          acomoletor.newQuintity += cartQuintity;
          acomoletor.newAmount += itemsTotal;

          return acomoletor;
        },
        {
          newQuintity: 0,
          newAmount: 0,
        }
      );
      state.cartTotalAmount = newAmount;
      state.cartTotalQuintity = newQuintity;
    },
  },
});
export const {
  addToCart,
  decrementQuintity,
  removeCart,
  removeAllProduct,
  getTotal,
} = CartSlice.actions;

export default CartSlice.reducer;
