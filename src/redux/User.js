import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: localStorage.getItem('user'),
  reducers: {
    setUser: (state, { payload }) => {
      state = payload;
      return state;
    }
  }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;