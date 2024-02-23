import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  value: {
    isAuth: false,
    username: '',
    uid: '',
  },
};

export const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    logout: () => {
      return initialState;
    },
    logIn: (state, action) => {
      return {
        value: {
          isAuth: true,
          username: action.payload,
          uid: 'slkdvjopsudso;so124e12412sjcbakjs',
        },
      };
    },
  },
});

export default authSlice.reducer;

export const { logout, logIn } = authSlice.actions;
