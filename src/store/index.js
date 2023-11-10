import { configureStore } from "@reduxjs/toolkit";
import { mixedDataReducer, addComment } from "./slices/mixedDataSlice";
import { dishesReducer } from "./slices/dishesSlice";
import logger from "redux-logger";

const store = configureStore({
  // thunk available
  reducer: {
    mixedDatas: mixedDataReducer,
    dishes: dishesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export { store };
export { addComment };

export * from "./thunks/fetchDishes";
