import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: 'page',
  initialState: 1,
  reducers: {
    setPage: (state, { payload }) => {
      state = payload;
      return state;
    }
  }
});

export const { setPage } = pageSlice.actions;

export default pageSlice.reducer;