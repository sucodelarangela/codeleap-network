import { createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "../api/postsService";

export const deletePostAsync = createAsyncThunk(
  "posts/delete",
  postsService.delete
);
