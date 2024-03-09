import { appApi } from "../api/apiSlice";

const productApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
      providesTags: ["products"],
    }),
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: "products",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const { useCreateProductMutation, useGetAllProductsQuery } = productApi;
