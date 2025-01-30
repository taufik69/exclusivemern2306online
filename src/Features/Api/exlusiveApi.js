import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const exclusiveApi = createApi({
  reducerPath: "exclusive",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_DOMAIN_NAME}${
      import.meta.env.VITE_API_BASE_URL
    }`,
    credentials: "include",
  }),
  tagTypes: ["cart"],
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
    GetuserCartItem: builder.query({
      query: () => `/useritem`,
      providesTags: ["cart"],
    }),
    AddToCart: builder.mutation({
      query: (productid) => ({
        url: `addtocart`,
        method: "POST",
        body: productid,
      }),
      invalidatesTags: ["cart"],
    }),

    RemoveCart: builder.mutation({
      query: (cartId) => ({
        url: `removecart?cartId=${cartId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
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
  useAddToCartMutation,
  useGetuserCartItemQuery,
  useRemoveCartMutation,
} = exclusiveApi;
