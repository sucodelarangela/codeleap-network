import { createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "../api/postsService";

export const patchPostAsync = createAsyncThunk(
  "posts/patch",
  postsService.patch
);