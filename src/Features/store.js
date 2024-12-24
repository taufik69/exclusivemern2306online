import { configureStore } from "@reduxjs/toolkit";
import { getTotal } from "./AllSlice/cartSlice";
import cartslice from "./AllSlice/cartSlice";
import { ProductApi } from "./Api/ProductApi";
import { exclusiveApi } from "./Api/exlusiveApi";
export const store = configureStore({
  reducer: {
    cart: cartslice,
    [ProductApi.reducerPath]: ProductApi.reducer,
    [exclusiveApi.reducerPath]: exclusiveApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ProductApi.middleware)
      .concat(exclusiveApi.middleware),
});

store.dispatch(getTotal());
