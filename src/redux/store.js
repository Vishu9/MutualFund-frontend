import { configureStore } from "@reduxjs/toolkit";
import mutualFundReducer from "./mutualFundSlice";

export const store = configureStore({
  reducer: {
    mutualFund: mutualFundReducer,
  },
});
