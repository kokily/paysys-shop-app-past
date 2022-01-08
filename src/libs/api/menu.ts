import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'qs';
import client from './client';

export interface MenuQuery {
  native: string;
  divide: string;
}

export const listMenuAPI = createAsyncThunk(
  'menu/listMenu',
  async (query: MenuQuery, { rejectWithValue }) => {
    try {
      const queryString = qs.stringify(query);
      const response = await client.get(`/items?${queryString}`);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const readMenuAPI = createAsyncThunk(
  'menu/readMenu',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await client.get(`/items/${id}`);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);
