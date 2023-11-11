import { createSlice } from "@reduxjs/toolkit";
import { fetchLeaders } from "../thunks/fetchLeaders";

const leadersSlice = createSlice({
  name: "leader",
  initialState: {
    leadersData: [],
    leadersLoading: false,
    leadersError: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchLeaders.pending, (state, action) => {
      state.leadersLoading = true;
    });
    builder.addCase(fetchLeaders.fulfilled, (state, action) => {
      state.leadersLoading = false;
      state.leadersData = action.payload;
    });
    builder.addCase(fetchLeaders.rejected, (state, action) => {
      state.leadersLoading = false;
      state.leadersError = action.error;
    });
  },
});

export const leadersReducer = leadersSlice.reducer;
