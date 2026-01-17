import { createSlice } from "@reduxjs/toolkit";

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    page: 1,
    selectedCoin: {
      uuid: "Qwsogvtv82FCd", // Bitcoin default
      name: "Bitcoin",
      symbol: "BTC",
    },
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSelectedCoin: (state, action) => {
      state.selectedCoin = action.payload;
    },
      setTimeRange: (state, action) => {
      state.timeRange = action.payload;
    },
  },
});

export const { setPage, setSelectedCoin,setTimeRange } = cryptoSlice.actions;
export default cryptoSlice.reducer;




// const cryptoSlice = createSlice({
//   name: "crypto",
//   initialState: {
//     page: 1,
//     selectedCoin: {
//       uuid: "Qwsogvtv82FCd",
//       name: "Bitcoin",
//       symbol: "BTC",
//     },
//     timeRange: "7d", // NEW
//   },
//   reducers: {
//     setPage: (state, action) => {
//       state.page = action.payload;
//     },
//     setSelectedCoin: (state, action) => {
//       state.selectedCoin = action.payload;
//     },
//     setTimeRange: (state, action) => {
//       state.timeRange = action.payload;
//     },
//   },
// });

// export  const { setPage, setSelectedCoin, setTimeRange } = cryptoSlice.actions;