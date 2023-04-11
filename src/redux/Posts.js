import { createSlice } from "@reduxjs/toolkit";
import { getPostsAsync } from "../actions/getPostsAction";

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    isLoading: false,
    hasError: false
  },
  extraReducers: builder => {
    builder
      .addCase(getPostsAsync.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getPostsAsync.fulfilled, (state, { payload }) => {
        state.data.push(...payload.results);
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(getPostsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      });
  }
});

export default postsSlice.reducer;