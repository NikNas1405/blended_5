import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    newFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { newFilter } = filterSlice.actions;

export default filterSlice.reducer;

//Selectors
export const getFilter = (state) => state.filter.filter;
