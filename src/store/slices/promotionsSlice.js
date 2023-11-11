import { createSlice } from "@reduxjs/toolkit";
import { fetchPromotions } from "../thunks/fetchPromotions";

const promotionsSlice = createSlice({
  name: "dish",
  initialState: {
    promotionsData: [],
    promotionsLoading: false,
    promotionsError: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPromotions.pending, (state, action) => {
      state.promotionsLoading = true;
    });
    builder.addCase(fetchPromotions.fulfilled, (state, action) => {
      state.promotionsLoading = false;
      state.promotionsData = action.payload;
    });
    builder.addCase(fetchPromotions.rejected, (state, action) => {
      state.promotionsLoading = false;
      state.promotionsError = action.error;
    });
  },
});

export const promotionsReducer = promotionsSlice.reducer;
