import { createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "../api/postsService";

export const getPostsAsync = createAsyncThunk(
  "posts/get",
  postsService.get
);
