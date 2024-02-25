import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCake: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    buyCake: (state, action) => {
      state.numOfCake = state.numOfCake - 1;
    },
  },
});

export default cakeSlice.reducer;
export const { buyCake } = cakeSlice.actions;
