import { configureStore } from '@reduxjs/toolkit';
import userSlice from './User';
import postsSlice from './Posts';
import modalSlice from './Modal';
import pageSlice from './Pagination';

export const store = configureStore({
  reducer: {
    user: userSlice,
    posts: postsSlice,
    modal: modalSlice,
    page: pageSlice
  }
});