import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { addCartAPI, viewCartAPI } from '../api/cart';

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
  reducers: {},
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
  },
});

export default cartSlice.reducer;
