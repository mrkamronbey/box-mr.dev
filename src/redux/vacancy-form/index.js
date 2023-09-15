import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";
const TOKEN = "5908429213:AAE2B7pxvOmAD0_Jeb44x9_z_rjeduBWP0E";
const CHAT_ID = "-1001664035527";
export const VacancyFormPost = createAsyncThunk(
  "contact/post",
  async (body) => {
    const info = `Имя : ${body.contact_name} %0AНомер телефона: ${body.phone_number}`;
    await fetch(
      `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${info}&parse_mode=html`
    );
    await axios.post(`${API_URL}/vacancy`, body).then((res) => res);
  }
);

const VacancyFormSlice = createSlice({
  name: "contact",
  initialState: {
    vacancyFormPost: {
      Error: false,
      Success: false,
      Loading: false,
    },
  },

  extraReducers: {
    [VacancyFormPost.pending]: (state, action) => {
      state.vacancyFormPost.Loading = true;
    },
    [VacancyFormPost.fulfilled]: (state, action) => {
      state.vacancyFormPost.Loading = false;
      state.vacancyFormPost.Success = true;
      state.vacancyFormPost.Error = false;
    },
    [VacancyFormPost.rejected]: (state, action) => {
      state.vacancyFormPost.Error = true;
      state.vacancyFormPost.Success = false;
      state.vacancyFormPost.Loading = false;
    },
  },
});

export const {} = VacancyFormSlice.actions;
export default VacancyFormSlice.reducer;
