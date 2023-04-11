import { configureStore } from '@reduxjs/toolkit';
import userSlice from './User';
import postsSlice from './Posts';

export const store = configureStore({
  reducer: {
    user: userSlice,
    posts: postsSlice
  }
});