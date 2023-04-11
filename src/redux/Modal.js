import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    id: 0,
    delete: false,
    edit: false
  },
  reducers: {
    setId: (state, { payload }) => {
      state.id = payload;
    },
    setDelete: (state, { payload }) => {
      state.delete = payload;
    },
    setEdit: (state, { payload }) => {
      state.edit = payload;
    }
  }
});

export const { setId, setDelete, setEdit } = modalSlice.actions;

export default modalSlice.reducer;