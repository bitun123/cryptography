import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetCryptosQuery } from "../../features/cryptoApi/api/cryptoApi";
import { setPage, setSelectedCoin } from "../../features/cryptoApi/slice/cryptoSlice";
import Pagination from "../../features/crypto/Component/ui/Pagination";
import ErrorState from "../../features/crypto/Component/ui/ErrorState";

export default function Cryptocurrencies() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.crypto.page);
const { data, isLoading, isError, refetch } = useGetCryptosQuery({
  limit: 20,
  offset: (page - 1) * 20,
});

const coins = data || [];

  if (isLoading) return <p className="text-gray-400">Loading...</p>;

  if (isError) {
    return <ErrorState message="Failed to load coins" onRetry={refetch} />;
  }

  return (
    <div className="p-6">

      {/* Table Card */}
      <div className="bg-[#111827] border border-gray-800 rounded-xl overflow-hidden">

        {/* Header */}
        <div className="grid grid-cols-12 px-6 py-4 text-gray-400 text-sm bg-[#0b1220]">
          <div className="col-span-1">#</div>
          <div className="col-span-5">Name</div>
          <div className="col-span-3 text-right">Price</div>
          <div className="col-span-3 text-right">24h%</div>
        </div>

        {/* Rows */}
        {coins.map((coin, index) => {
          const change = Number(coin.change);
          const isUp = change >= 0;

          return (
            <div
              key={coin.uuid}
              onClick={() =>
                dispatch(
                  setSelectedCoin({
                    uuid: coin.uuid,
                    name: coin.name,
                    symbol: coin.symbol,
                  })
                )
              }
              className="grid grid-cols-12 px-6 py-5 items-center border-t border-gray-800 hover:bg-[#1a2333] transition cursor-pointer"
            >
              {/* Rank */}
              <div className="col-span-1 text-gray-400">
                {(page - 1) * 20 + index + 1}
              </div>

              {/* Name */}
              <div className="col-span-5 flex items-center gap-4">
                <img
                  src={coin.iconUrl}
                  alt={coin.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-white font-semibold">{coin.name}</p>
                  <p className="text-gray-400 text-sm">{coin.symbol}</p>
                </div>
              </div>

              {/* Price */}
              <div className="col-span-3 text-right text-white font-semibold">
                ${Number(coin.price).toLocaleString()}
              </div>

              {/* Change */}
              <div
                className={`col-span-3 text-right font-semibold ${
                  isUp ? "text-green-400" : "text-red-400"
                }`}
              >
                {isUp ? "↑" : "↓"} {Math.abs(change).toFixed(2)}%
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <Pagination
        page={page}
        hasMore={coins.length === 20}
        onPrev={() => dispatch(setPage(page - 1))}
        onNext={() => dispatch(setPage(page + 1))}
      />
    </div>
  );
}
