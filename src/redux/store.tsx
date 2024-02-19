import { configureStore } from '@reduxjs/toolkit';

import authReducers from './features/authSlice';

export const store = configureStore({
  reducer: {
    authReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
