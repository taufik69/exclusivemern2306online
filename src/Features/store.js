import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./AllSlice/countSlice";
import { ProductApi } from "./Api/ProductApi";
import { exclusiveApi } from "./Api/exlusiveApi";
export const store = configureStore({
  reducer: {
    count: counterSlice,
    [ProductApi.reducerPath]: ProductApi.reducer,
    [exclusiveApi.reducerPath]: exclusiveApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ProductApi.middleware)
      .concat(exclusiveApi.middleware),
});
