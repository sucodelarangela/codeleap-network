import { createSlice } from "@reduxjs/toolkit";
import { getPostsAsync } from "../actions/getPostsAction";
import { postPostsAsync } from "../actions/postPostAction";
import { deletePostAsync } from "../actions/deletePostAction";

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    count: 0,
  },
  extraReducers: builder => {
    builder
      .addCase(getPostsAsync.fulfilled, (state, { payload }) => {
        state.data = payload.results;
        state.count = payload.count;
      })
      .addCase(postPostsAsync.fulfilled, (state, { payload }) => {
        state.data = payload.results;
        state.count = payload.count;
      })
      .addCase(deletePostAsync.fulfilled, (state, { payload }) => {
        state.data = payload.results;
        state.count = payload.count;
      });
  }
});

export default postsSlice.reducer;