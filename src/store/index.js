import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { mixedDataReducer, addComment } from "./slices/mixedDataSlice";
import { dishesReducer } from "./slices/dishesSlice";
import logger from "redux-logger";
import { createForms } from "react-redux-form";
import { InitialFeedback } from "../redux/forms";

const rootReducer = combineReducers({
  ...createForms({
    feedback: InitialFeedback,
  }),
  mixedDatas: mixedDataReducer,
  dishes: dishesReducer,
});

const store = configureStore({
  // thunk available
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export { store };
export { addComment };

export * from "./thunks/fetchDishes";
