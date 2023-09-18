import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const TOKEN = "6314898309:AAH1e_rltGK9VfHFRgwLph-tszpUBl-TkRw";
const CHAT_ID = "-1001918786263";
export const VacancyFormPost = createAsyncThunk(
  "vacancyForm/post",
  async (body) => {
    const info = `
        Ф.И.О: ${body.full_name}
        %0AГод рождения: ${body.birth_day}
        %0AМесто жительства: ${body.places}
        %0AСемейное положение: ${body.statuses}
        %0AТелефон: ${body.phone_number} 
        %0AОбразование: ${body.educations}
        %0A1-е место: ${body.work_place1}
        %0A2-е место: ${body.work_place2}
        %0A3-е место: ${body.work_place3}
        %0AЗнание языков узб / рус: ${body.languages}
        %0AВопрос/Комментарий: ${body.comments}
     `;
    await fetch(
      `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${info}&parse_mode=html`
    );
  }
);

const VacancyFormSlice = createSlice({
  name: "vacancyForm",
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
      state.vacancyFormPost.Error = action.payload;
      state.vacancyFormPost.Success = false;
      state.vacancyFormPost.Loading = false;
    },
  },
});

export const {} = VacancyFormSlice.actions;
export default VacancyFormSlice.reducer;
