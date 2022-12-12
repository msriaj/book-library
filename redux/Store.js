import { configureStore } from "@reduxjs/toolkit";
import { bookList } from "./Slices/booksSlice";

export const store = configureStore({
  reducer: {
    counter: bookList,
  },
});
