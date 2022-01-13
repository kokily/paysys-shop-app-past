import { createAsyncThunk } from '@reduxjs/toolkit';
import client from './client';

export interface AddCartPayload {
  item_id: string;
  price: number;
  count: number;
}

// Add Cart API
export const addCartAPI = createAsyncThunk(
  'cart/addCart',
  async (payload: AddCartPayload, { rejectWithValue }) => {
    try {
      const response = await client.post('/cart', payload);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

// View Cart API
export const viewCartAPI = createAsyncThunk(
  'cart/viewCart',
  async (_, { rejectWithValue }) => {
    try {
      const repsonse = await client.get('/cart');
      return repsonse.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Remove Cart API
export const removeCartAPI = createAsyncThunk(
  'cart/removeCart',
  async (_, { rejectWithValue }) => {
    try {
      const response = await client.delete('/cart');
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Remove One Cart API
export const removeOneCartAPI = createAsyncThunk(
  'cart/removeOneCart',
  async (item_id: string, { rejectWithValue }) => {
    try {
      const response = await client.patch(`/cart/${item_id}`);
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);
