import { configureStore } from "@reduxjs/toolkit";
import { mixedDataReducer, addComment } from "./slices/mixedDataSlice";

const store = configureStore({
  reducer: {
    mixedDatas: mixedDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export { store };
export { addComment };
