import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const NewsProductPost = createAsyncThunk("newsproducts/post", async (body) => {
  return await axios.post(`${API_URL}/news-product`, body).then((res) => res);
});
export const NewsProductGet = createAsyncThunk("newsproducts/get", async () => {
  return await axios
    .get(`${API_URL}/news-product`)
    .then((response) => response.data);
});

export const NewsProductDelete = createAsyncThunk("newsproducts/delete", async (id) => {
  return await axios
    .delete(`${API_URL}/news-product/${id}`)
    .then((response) => response.data);
});
export const NewsProductPut = createAsyncThunk(
  "products/put",
  async ({ body, id }) => {
    return await axios
      .put(`${API_URL}/news-product/${id}`, body)
      .then((response) => response.data);
  }
);

export const UploadImage = createAsyncThunk("NewsProduct/upload", async (e) => {
  const formData = new FormData();
  formData.append("file", e.target.files[0]);
  formData.append("upload_preset", "dat87nly");
  try {
    return await axios
      .post("https://api.cloudinary.com/v1_1/dffclbjds/upload", formData)
      .then((response) => response?.data.secure_url);
  } catch (error) {
    return error;
  }
});
const NewsProductSlice = createSlice({
  name: "product",
  initialState: {
    newsproductGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
    newsproductPost: {
      Success: false,
      Error: false,
      loading: false,
    },
    newsproductDelete: {
      Success: false,
      Error: false,
      loading: false,
    },
    newsproductPut: {
      Error: false,
      Loading: false,
      Success: false,
    },
    uploadProjects: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
  },
  extraReducers: {
    // get
    [NewsProductGet.pending]: (state, action) => {
      state.newsproductGet.loading = true;
    },
    [NewsProductGet.fulfilled]: (state, action) => {
      state.newsproductGet.loading = false;
      state.newsproductGet.success = true;
      state.newsproductGet.data = action.payload;
      state.newsproductGet.error = false;
    },
    [NewsProductGet.rejected]: (state, action) => {
      state.newsproductGet.loading = false;
      state.newsproductGet.error = true;
      state.newsproductGet.success = false;
    },
    // add
    [NewsProductPost.pending]: (state, action) => {
      state.newsproductPost.loading = true;
    },
    [NewsProductPost.fulfilled]: (state, action) => {
      state.newsproductPost.loading = false;
      state.newsproductPost.Success = true;
      state.newsproductPost.Error = false;
    },
    [NewsProductPost.rejected]: (state, action) => {
      state.newsproductPost.loading = false;
      state.newsproductPost.Error = true;
      state.newsproductPost.Success = false;
    },
    // delete
    [NewsProductDelete.pending]: (state, action) => {
      state.newsproductDelete.loadingDelete = true;
    },
    [NewsProductDelete.fulfilled]: (state, action) => {
      state.newsproductDelete.loading = false;
      state.newsproductDelete.Success = true;
      state.newsproductDelete.Error = false;
    },
    [NewsProductDelete.rejected]: (state, action) => {
      state.newsproductDelete.loading = false;
      state.newsproductDelete.Error = true;
      state.newsproductDelete.Success = false;
    },
    // put
    [NewsProductPut.pending]: (state, action) => {
      state.newsproductPut.loading = true;
    },
    [NewsProductPut.fulfilled]: (state, action) => {
      state.newsproductPut.Error = false;
      state.newsproductPut.Success = true;
      state.newsproductPut.Loading = false;
    },
    [NewsProductPut.rejected]: (state, action) => {
      state.newsproductPut.Error = true;
      state.newsproductPut.Success = false;
      state.newsproductPut.Loading = false;
    },

    [UploadImage.pending]: (state, action) => {
      state.uploadProjects.Loading = true;
    },
    [UploadImage.fulfilled]: (state, action) => {
      state.uploadProjects.Error = false;
      state.uploadProjects.Success = true;
      state.uploadProjects.Loading = false;
      state.uploadProjects.data = action.payload;
    },
    [UploadImage.rejected]: (state, action) => {
      state.uploadProjects.Error = true;
      state.uploadProjects.Success = false;
      state.uploadProjects.Loading = false;
    },
  },
});

export const {} = NewsProductSlice.actions;
export default NewsProductSlice.reducer;
