import { configureStore } from "@reduxjs/toolkit";
import NewsSlice from "./news/index";
import ContactSlice from './contact/index';
import CategorySlice from './category/index'
import ProductSlice from './products/index'
import NewsProductSlice from "./news-product/index";
export const store = configureStore({
  reducer: {
    news: NewsSlice,
    contact: ContactSlice,
    category: CategorySlice,
    product: ProductSlice,
    newsproduct: NewsProductSlice
  },
});