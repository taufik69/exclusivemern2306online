import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const exclusiveApi = createApi({
  reducerPath: "exclusive",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_DOMAIN_NAME}${
      import.meta.env.VITE_API_BASE_URL
    }`,
  }),
  endpoints: (builder) => ({
    GetAllBanner: builder.query({
      query: () => `/banner`,
    }),

    GetAllFlashSale: builder.query({
      query: () => `/flashsale`,
    }),
    GetAllCategory: builder.query({
      query: () => `/category`,
    }),
    GetSingleCategory: builder.query({
      query: (id) => `/category/${id}`,
    }),
    GetAllBestSellingProudct: builder.query({
      query: () => `/bestSelling`,
    }),
    GetAllProduct: builder.query({
      query: () => `/product`,
    }),
    GetSingleProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),
  }),
});

export const {
  useGetAllBannerQuery,
  useGetAllFlashSaleQuery,
  useGetAllCategoryQuery,
  useGetSingleCategoryQuery,
  useGetAllBestSellingProudctQuery,
  useGetAllProductQuery,
  useGetSingleProductQuery,
} = exclusiveApi;
