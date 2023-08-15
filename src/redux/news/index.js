import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const NewsGet = createAsyncThunk("news/get", async () => {
  return await axios
    .get(`${API_URL}/news`)
    .then((response) => response.data);
});

const NewsSlice = createSlice({
  name: "news",
  initialState: {
    newsGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
  },
  extraReducers: {
    // get
    [NewsGet.pending]: (state, action) => {
      state.newsGet.loading = true;
    },
    [NewsGet.fulfilled]: (state, action) => {
      state.newsGet.loading = false;
      state.newsGet.success = true;
      state.newsGet.data = action.payload;
      state.newsGet.error = false;
    },
    [NewsGet.rejected]: (state, action) => {
      state.newsGet.loading = false;
      state.newsGet.error = true;
      state.newsGet.success = false;
    },
  },
});

export const {} = NewsSlice.actions;
export default NewsSlice.reducer;
