import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./AllSlice/countSlice";
import { ProductApi } from "./Api/ProductApi";
export const store = configureStore({
  reducer: {
    count: counterSlice,
    [ProductApi.reducerPath]: ProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
});
