import { createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "../api/postsService";

export const postPostsAsync = createAsyncThunk(
  "posts/post",
  postsService.post
);
