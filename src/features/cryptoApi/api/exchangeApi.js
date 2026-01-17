import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const exchangeApi = createApi({
  reducerPath: "exchangeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3/",
  }),
  endpoints: (builder) => ({
    getExchanges: builder.query({
      query: ({ page = 1, perPage = 20 }) =>
        `exchanges?per_page=${perPage}&page=${page}`,
    }),
    getExchangeById: builder.query({
  query: (id) => `exchanges/${id}`,
}),
  }),
});

export const { useGetExchangesQuery ,useGetExchangeByIdQuery} = exchangeApi;
