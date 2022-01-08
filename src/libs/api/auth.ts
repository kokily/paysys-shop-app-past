import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import client from './client';

export interface LoginPayload {
  username: string;
  password: string;
}

export const loginAPI = createAsyncThunk(
  'auth/login',
  async (payload: LoginPayload, { rejectWithValue }) => {
    try {
      const response = await client.post('/auth/login', payload);
      const cookies = response.headers['set-cookie'];

      if (cookies) {
        await AsyncStorage.setItem(
          'access_token',
          // @ts-ignore
          getCookie('access_token', cookies)
        );
        await AsyncStorage.setItem(
          'refresh_token',
          // @ts-ignore
          getCookie('access_token', cookies)
        );
      }

      return response.data;
    } catch (err: any) {
      await AsyncStorage.removeItem('access_token');
      await AsyncStorage.removeItem('refresh_token');
      return rejectWithValue(err.response.data);
    }
  }
);

export const checkAPI = createAsyncThunk(
  'auth/check',
  async (_, { rejectWithValue }) => {
    try {
      const response = await client.get('/auth/check');
      const cookies = response.headers['set-cookie'];

      if (cookies) {
        await AsyncStorage.setItem(
          'access_token',
          // @ts-ignore
          getCookie('access_token', cookies)
        );
        await AsyncStorage.setItem(
          'refresh_token',
          // @ts-ignore
          getCookie('access_token', cookies)
        );
      }

      return response.data;
    } catch (err: any) {
      await AsyncStorage.removeItem('access_token');
      await AsyncStorage.removeItem('refresh_token');
      return rejectWithValue(err.response.data);
    }
  }
);
