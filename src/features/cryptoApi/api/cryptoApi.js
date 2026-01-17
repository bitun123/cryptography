import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_COINRANKING_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("x-access-token", import.meta.env.VITE_COINRANKING_API_KEY);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: ({ limit = 20, offset = 0 }) =>
        `coins?limit=${limit}&offset=${offset}`,
      transformResponse: (res) => res.data.coins,
    }),

getCoinHistory: builder.query({
  query: ({ uuid, timeRange }) =>
    `coin/${uuid}/history?timePeriod=${timeRange}`,
  transformResponse: (res) =>
    res.data.history.reverse().map((item) => ({
      day: new Date(item.timestamp * 1000).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      price: Number(item.price),
    })),
}),

    // getMarketData: builder.query({
    //   query: () => `/stats`,
    //   transformResponse: (response) => [
    //     { name: "Market", marketCap: response.data.totalMarketCap / 1e12 },
    //   ],
    // }),



// getMarketStats: builder.query({
//   query: () => `stats`,
//   transformResponse: (res) => [
//     {
//       name: "Market Cap",
//       value: res.data.totalMarketCap / 1e12,
//     },
//   ],
// }),

getCoinMarketCapHistory: builder.query({
  async queryFn({ uuid, timeRange }, _q, _e, fetchWithBQ) {
    const historyRes = await fetchWithBQ(
      `coin/${uuid}/history?timePeriod=${timeRange}`
    );
    const coinRes = await fetchWithBQ(`coin/${uuid}`);

    if (historyRes.error) return { error: historyRes.error };
    if (coinRes.error) return { error: coinRes.error };

    const supply =
      Number(coinRes.data.data.coin.supply?.circulating) || 0;

    const data = historyRes.data.data.history.reverse().map((item) => ({
      day: new Date(item.timestamp * 1000).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      marketCap: Number(item.price) * supply,
    }));

    return { data };
  },
}),

getGlobalStats: builder.query({
  query: () => `stats`,
  transformResponse: (res) => res.data,
}),


getExchanges: builder.query({
  query: ({ limit = 20, offset = 0 }) =>
    `/exchanges?limit=${limit}&offset=${offset}`,
  transformResponse: (res) => res.data.exchanges,
}),

getCryptoNews: builder.query({
  query: () => `https://min-api.cryptocompare.com/data/v2/news/?lang=EN`,
  transformResponse: (res) => res.Data.slice(0, 20),
}),

  }),
});

export const {
  useGetCryptosQuery,
useGetCoinHistoryQuery,
useGetCoinMarketCapHistoryQuery,
useGetGlobalStatsQuery,
useGetExchangesQuery,
useGetCryptoNewsQuery,
} = cryptoApi;
