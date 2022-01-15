import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { changePasswordAPI } from '../api/users';

export interface UsersState {
  changePasswordLoading: boolean;
  changePasswordError: string | null;
}

const initialState: UsersState = {
  changePasswordLoading: false,
  changePasswordError: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [changePasswordAPI.pending.type]: (state) => {
      state.changePasswordLoading = true;
      state.changePasswordError = null;
    },
    [changePasswordAPI.fulfilled.type]: (state) => {
      state.changePasswordLoading = false;
    },
    [changePasswordAPI.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.changePasswordLoading = false;
      state.changePasswordError = action.payload;
    },
  },
});

export default usersSlice.reducer;
