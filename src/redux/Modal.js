import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    delete: false,
    edit: false
  },
  reducers: {
    setDelete: (state, { payload }) => {
      state.delete = payload;
    },
    setEdit: (state, { payload }) => {
      state.edit = payload;
    }
  }
});

export const { setDelete, setEdit } = modalSlice.actions;

export default modalSlice.reducer;