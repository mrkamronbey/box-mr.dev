import { configureStore } from "@reduxjs/toolkit";
import ContactSlice from "./contact/index";
import CategorySlice from "./category/index";
import ProductSlice from "./products/index";
import NewsSlice from "./news/index";
import BlogSlice from "./blog/index";
import VacansySlice from './vacansy/index'
import VacancyFormSlice from './vacancy-form/index'

export const store = configureStore({
  reducer: {
    contact: ContactSlice,
    category: CategorySlice,
    product: ProductSlice,
    news: NewsSlice,
    blog: BlogSlice,
    vacansy: VacansySlice,
    vacansyForm: VacancyFormSlice
  },
});
