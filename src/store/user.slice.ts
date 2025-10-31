import {
  type PayloadAction,
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit';

import type { User } from '@/api/types/user.types';
import { userApi } from '@/api/user.api';

export const getUser = createAsyncThunk('user/getUser', async () => {
  const response = await userApi.getProfile();
  return response;
});

interface IUserState {
  user: User | undefined;
}

const initialState: IUserState = {
  user: undefined
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | undefined>) => {
      state.user = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.user = undefined;
    });
  }
});

export const { setUser } = userSlice.actions;

export default userSlice;
