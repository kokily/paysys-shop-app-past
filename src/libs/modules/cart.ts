import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import {
  addCartAPI,
  removeCartAPI,
  removeOneCartAPI,
  viewCartAPI,
} from '../api/cart';

export interface CartState {
  cart: CartType | null;
  totalAmount: number;
  addCartLoading: boolean;
  addCartError: string | null;
  viewCartLoading: boolean;
  viewCartError: string | null;
  removeCartLoading: boolean;
  removeCartError: string | null;
  removeOneCartLoading: boolean;
  removeOneCartError: string | null;
}

const initialState: CartState = {
  cart: null,
  totalAmount: 0,
  addCartLoading: false,
  addCartError: null,
  viewCartLoading: false,
  viewCartError: null,
  removeCartLoading: false,
  removeCartError: null,
  removeOneCartLoading: false,
  removeOneCartError: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = null;
    },
  },
  extraReducers: {
    [addCartAPI.pending.type]: (state) => {
      state.addCartLoading = true;
      state.addCartError = null;
    },
    [addCartAPI.fulfilled.type]: (state) => {
      state.addCartLoading = false;
    },
    [addCartAPI.rejected.type]: (state, action: PayloadAction<string>) => {
      state.addCartLoading = false;
      state.addCartError = action.payload;
    },
    [viewCartAPI.pending.type]: (state) => {
      state.viewCartLoading = true;
      state.viewCartError = null;
    },
    [viewCartAPI.fulfilled.type]: (state, action: PayloadAction<CartType>) => {
      state.viewCartLoading = false;
      state.cart = action.payload;

      let total = 0;
      let list = state.cart.items;

      if (list) {
        for (let key in list) {
          total += list[key].amount;
        }
      }

      state.totalAmount = total;
    },
    [viewCartAPI.rejected.type]: (state, action: PayloadAction<string>) => {
      state.viewCartLoading = false;
      state.viewCartError = action.payload;
      state.cart = null;
      state.totalAmount = 0;
    },
    [removeCartAPI.pending.type]: (state) => {
      state.removeCartLoading = true;
      state.removeCartError = null;
    },
    [removeCartAPI.fulfilled.type]: (state) => {
      state.removeCartLoading = false;
      state.cart = null;
      state.totalAmount = 0;
    },
    [removeCartAPI.rejected.type]: (state, action: PayloadAction<string>) => {
      state.removeCartLoading = false;
      state.removeCartError = action.payload;
    },
    [removeOneCartAPI.pending.type]: (state) => {
      state.removeOneCartLoading = true;
      state.removeOneCartError = null;
    },
    [removeOneCartAPI.fulfilled.type]: (
      state,
      action: PayloadAction<CartType>
    ) => {
      state.removeOneCartLoading = false;
      state.cart = action.payload;

      let total = 0;
      let list = state.cart.items;

      if (list) {
        for (let key in list) {
          total += list[key].amount;
        }

        state.totalAmount = total;
      } else {
        state.totalAmount = 0;
      }
    },
    [removeOneCartAPI.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.removeOneCartLoading = false;
      state.removeOneCartError = action.payload;
    },
  },
});

export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;
