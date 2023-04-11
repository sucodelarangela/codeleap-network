import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    id: 0,
    delete: false,
    edit: false,
    title: '',
    content: ''
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
    },
    setTitle: (state, { payload }) => {
      state.title = payload;
    },
    setContent: (state, { payload }) => {
      state.content = payload;
    },
  }
});

export const { setId, setDelete, setEdit, setTitle, setContent } = modalSlice.actions;

export default modalSlice.reducer;