import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";

// Fetch mutual fund data
export const fetchMutualFunds = createAsyncThunk(
  "mutualFund/fetchMutualFunds",
  async () => {
    const response = await api.get("/mutual-funds");
    return response.data;
  }
);

const mutualFundSlice = createSlice({
  name: "mutualFund",
  initialState: {
    funds: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMutualFunds.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMutualFunds.fulfilled, (state, action) => {
        state.loading = false;
        state.funds = action.payload;
      })
      .addCase(fetchMutualFunds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default mutualFundSlice.reducer;
