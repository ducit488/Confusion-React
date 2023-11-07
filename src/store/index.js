import { configureStore } from "@reduxjs/toolkit";
import { mixedDataReducer } from "./slices/mixedDataSlice";

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
