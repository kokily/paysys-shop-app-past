import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { checkAPI, loginAPI, logoutAPI } from '../api/auth';

export interface AuthState {
  user: MeType | null;
  loginLoading: boolean;
  loginError: string | null;
  checkLoading: boolean;
  checkError: string | null;
  logoutLoading: boolean;
  logoutError: string | null;
}

const initialState: AuthState = {
  user: null,
  loginLoading: false,
  loginError: null,
  checkLoading: false,
  checkError: null,
  logoutLoading: false,
  logoutError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [loginAPI.pending.type]: (state) => {
      state.loginLoading = true;
      state.loginError = null;
    },
    [loginAPI.fulfilled.type]: (state, action: PayloadAction<MeType>) => {
      state.loginLoading = false;
      state.user = action.payload;
    },
    [loginAPI.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loginLoading = false;
      state.loginError = action.payload;
      state.user = null;
    },
    [checkAPI.pending.type]: (state) => {
      state.checkLoading = true;
      state.checkError = null;
    },
    [checkAPI.fulfilled.type]: (state, action: PayloadAction<MeType>) => {
      state.checkLoading = false;
      state.user = action.payload;
    },
    [checkAPI.rejected.type]: (state, action: PayloadAction<string>) => {
      state.checkLoading = false;
      state.checkError = action.payload;
      state.user = null;
    },
    [logoutAPI.pending.type]: (state) => {
      state.logoutLoading = true;
      state.logoutError = null;
    },
    [logoutAPI.fulfilled.type]: (state) => {
      state.logoutLoading = false;
      state.user = null;
    },
    [logoutAPI.rejected.type]: (state, action: PayloadAction<string>) => {
      state.logoutLoading = false;
      state.logoutError = action.payload;
    },
  },
});

export default authSlice.reducer;
