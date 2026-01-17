import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://min-api.cryptocompare.com/",
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => "data/v2/news/?lang=EN",
      transformResponse: (res) => res.Data || [],
    }),
  }),
});

export const { useGetCryptoNewsQuery } = newsApi;
