import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, ITokensPayload } from '@modules/auth/types/auth.type';
import { IUser } from '@modules/profile';

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: '',
  refreshToken: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens: (state, { payload }: PayloadAction<ITokensPayload>) => {
      console.log(payload, 'payload');
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
    },
    setUser: (state, { payload }: PayloadAction<IUser>) => {
      state.isAuthenticated = true;
      state.user = payload;
    },
    clear: state => {
      state.isAuthenticated = false;
      state.token = '';
      state.refreshToken = '';
      state.user = null;
    },
  },
});

export const { setTokens, setUser, clear } = authSlice.actions;

export default authSlice.reducer;
