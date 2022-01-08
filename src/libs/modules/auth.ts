import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { checkAPI, loginAPI } from '../api/auth';

export interface AuthState {
  user: MeType | null;
  loginLoading: boolean;
  loginError: SerializedError | null;
  checkLoading: boolean;
  checkError: SerializedError | null;
}

const initialState: AuthState = {
  user: null,
  loginLoading: false,
  loginError: null,
  checkLoading: false,
  checkError: null,
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
    [loginAPI.rejected.type]: (
      state,
      action: ReturnType<typeof loginAPI.rejected>
    ) => {
      state.loginLoading = false;
      state.loginError = action.error;
    },
    [checkAPI.pending.type]: (state) => {
      state.checkLoading = true;
      state.checkError = null;
    },
    [checkAPI.fulfilled.type]: (state, action: PayloadAction<MeType>) => {
      state.checkLoading = false;
      state.user = action.payload;
    },
    [checkAPI.rejected.type]: (
      state,
      action: ReturnType<typeof checkAPI.rejected>
    ) => {
      state.checkLoading = false;
      state.checkError = action.error;
    },
  },
});

export default authSlice.reducer;
