import { createAsyncThunk } from '@reduxjs/toolkit';
import client from './client';

export interface ChangePasswordPayload {
  password: string;
}

// Change Password API
export const changePasswordAPI = createAsyncThunk(
  'users/changePassword',
  async (payload: ChangePasswordPayload, { rejectWithValue }) => {
    try {
      const response = await client.patch('/users/password', payload);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);
