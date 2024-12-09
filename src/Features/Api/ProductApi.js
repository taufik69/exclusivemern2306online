import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Define a service using a base URL and expected endpoints
export const ProductApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    GetAllProduct: builder.query({
      query: () => "/products",
    }),
    BestSellingProduct: builder.query({
      query: () => "/products/category/smartphones",
    }),
    GetAllProductCategoryList: builder.query({
      query: () => "/products/category-list",
    }),
    GetSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    GetProductByCategory: builder.query({
      query: (categoryName) => `/products/category/${categoryName}`,
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useBestSellingProductQuery,
  useGetAllProductCategoryListQuery,
  useGetSingleProductQuery,
  useGetProductByCategoryQuery,
} = ProductApi;
