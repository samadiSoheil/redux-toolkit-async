import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "./cakeSlice";
import userSlice from "./userSlice.js";

export let myStore = configureStore({
  reducer: {
    cake: cakeSlice,
    users: userSlice,
  },
});
