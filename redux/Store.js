import { configureStore } from "@reduxjs/toolkit";
import { setBookList } from "./Slices/booksSlice";

export const store = configureStore({
  reducer: {
    books: setBookList,
  },
});
