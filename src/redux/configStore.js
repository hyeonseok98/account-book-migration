import { configureStore } from "@reduxjs/toolkit";
import spendingSlice from "./slices/spending.slice";

const store = configureStore({
  reducer: {
    spendings: spendingSlice,
  },
});

export default store;
