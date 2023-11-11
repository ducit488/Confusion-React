import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { mixedDataReducer } from "./slices/mixedDataSlice";
import { dishesReducer } from "./slices/dishesSlice";
import { commentsReducer } from "./slices/commentsSlice";
import { promotionsReducer } from "./slices/promotionsSlice";
import logger from "redux-logger";
import { createForms } from "react-redux-form";
import { InitialFeedback } from "../redux/forms";

const rootReducer = combineReducers({
  ...createForms({
    feedback: InitialFeedback,
  }),
  mixedDatas: mixedDataReducer,
  dishes: dishesReducer,
  comments: commentsReducer,
  promotions: promotionsReducer,
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

export * from "./thunks/fetchDishes";
export * from "./thunks/addComments";
export * from "./thunks/fetchComments";
export * from "./thunks/fetchPromotions";
