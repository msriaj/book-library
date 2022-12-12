import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookList: [],
};

const books = createSlice({
  name: "books",
  initialState,
  reducers: {
    bookList: (state, payload) => {
      state.number = state.number + 5;
    },
  },
});

export const { bookList } = books.actions;
export default books.reducer;
