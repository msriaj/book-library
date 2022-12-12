import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookList: [],
};

const books = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBookList: (state, payload) => {
      console.log({ payload });
      state.bookList = payload.payload;
    },
  },
});

export const { setBookList } = books.actions;
export default books.reducer;
