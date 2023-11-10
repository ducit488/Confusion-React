import { createSlice } from "@reduxjs/toolkit";
import { fetchDishes } from "../thunks/fetchDishes";

const dishesSlice = createSlice({
  name: "dish",
  initialState: {
    dishesData: [],
    dishesLoading: false,
    dishesError: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchDishes.pending, (state, action) => {
      state.dishesLoading = true;
    });
    builder.addCase(fetchDishes.fulfilled, (state, action) => {
      state.dishesLoading = false;
      state.dishesData = action.payload;
    });
    builder.addCase(fetchDishes.rejected, (state, action) => {
      state.dishesLoading = false;
      state.dishesError = action.error;
    });
  },
});

export const {} = dishesSlice.actions;
export const dishesReducer = dishesSlice.reducer;
