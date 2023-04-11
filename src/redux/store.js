import { configureStore } from '@reduxjs/toolkit';
import userSlice from './User';

export const store = configureStore({
  reducer: {
    user: userSlice
  }
});