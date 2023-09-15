import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const VacansyPost = createAsyncThunk("Vacansy/post", async (body) => {
  return await axios.post(`${API_URL}/vakansiy`, body).then((res) => res);
});
export const VacansyGet = createAsyncThunk("Vacansy/get", async () => {
  return await axios
    .get(`${API_URL}/vakansiy`)
    .then((response) => response.data);
});

export const VacansyDelete = createAsyncThunk("Vacansy/delete", async (id) => {
  return await axios
    .delete(`${API_URL}/vakansiy/${id}`)
    .then((response) => response.data);
});
export const VacansyPut = createAsyncThunk(
  "Vacansy/put",
  async ({ body, id }) => {
    return await axios
      .put(`${API_URL}/vakansiy/${id}`, body)
      .then((response) => response.data);
  }
);

const VacansySlice = createSlice({
  name: "Vacansy",
  initialState: {
    VacansyGets: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
    VacansyPosts: {
      Success: false,
      Error: false,
      loading: false,
    },
    VacansyDeletes: {
      Success: false,
      Error: false,
      loading: false,
    },
    VacansyPuts: {
      Error: false,
      Loading: false,
      Success: false,
    },
  },
  extraReducers: {
    // get
    [VacansyGet.pending]: (state, action) => {
      state.VacansyGets.loading = true;
    },
    [VacansyGet.fulfilled]: (state, action) => {
      state.VacansyGets.loading = false;
      state.VacansyGets.success = true;
      state.VacansyGets.data = action.payload;
      state.VacansyGets.error = false;
    },
    [VacansyGet.rejected]: (state, action) => {
      state.VacansyGets.loading = false;
      state.VacansyGets.error = true;
      state.VacansyGets.success = false;
    },
    // add
    [VacansyPost.pending]: (state, action) => {
      state.VacansyPosts.loading = true;
    },
    [VacansyPost.fulfilled]: (state, action) => {
      state.VacansyPosts.loading = false;
      state.VacansyPosts.Success = true;
      state.VacansyPosts.Error = false;
    },
    [VacansyPost.rejected]: (state, action) => {
      state.VacansyPosts.loading = false;
      state.VacansyPosts.Error = true;
      state.VacansyPosts.Success = false;
    },
    // delete
    [VacansyDelete.pending]: (state, action) => {
      state.VacansyDeletes.loadingDelete = true;
    },
    [VacansyDelete.fulfilled]: (state, action) => {
      state.VacansyDeletes.loading = false;
      state.VacansyDeletes.Success = true;
      state.VacansyDeletes.Error = false;
    },
    [VacansyDelete.rejected]: (state, action) => {
      state.VacansyDeletes.loading = false;
      state.VacansyDeletes.Error = true;
      state.VacansyDeletes.Success = false;
    },
    // put
    [VacansyPut.pending]: (state, action) => {
      state.VacansyPuts.loading = true;
    },
    [VacansyPut.fulfilled]: (state, action) => {
      state.VacansyPuts.Error = false;
      state.VacansyPuts.Success = true;
      state.VacansyPuts.Loading = false;
    },
    [VacansyPut.rejected]: (state, action) => {
      state.VacansyPuts.Error = true;
      state.VacansyPuts.Success = false;
      state.VacansyPuts.Loading = false;
    },
  },
});

export const {} = VacansySlice.actions;
export default VacansySlice.reducer;
