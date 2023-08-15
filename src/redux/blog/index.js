import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const BlogGet = createAsyncThunk("Blog/get", async () => {
  return await axios
    .get(`${API_URL}/blog`)
    .then((response) => response.data);
});

const BlogSlice = createSlice({
  name: "Blog",
  initialState: {
    BlogGets: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
  },
  extraReducers: {
    // get
    [BlogGet.pending]: (state, action) => {
      state.BlogGets.loading = true;
    },
    [BlogGet.fulfilled]: (state, action) => {
      state.BlogGets.loading = false;
      state.BlogGets.success = true;
      state.BlogGets.data = action.payload;
      state.BlogGets.error = false;
    },
    [BlogGet.rejected]: (state, action) => {
      state.BlogGets.loading = false;
      state.BlogGets.error = true;
      state.BlogGets.success = false;
    },
  },
});

export const {} = BlogSlice.actions;
export default BlogSlice.reducer;
