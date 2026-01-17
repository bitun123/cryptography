import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetExchangesQuery } from "../../features/cryptoApi/api/exchangeApi";
import { setPage } from "../../features/cryptoApi/slice/cryptoSlice";
import Pagination from "../../features/crypto/Component/ui/Pagination";
import ErrorState from "../../features/crypto/Component/ui/ErrorState";

import ExchangeDetailModal from "../../features/crypto/model/ExchangeDetailModal";

export default function Exchanges() {
  const [selectedExchange, setSelectedExchange] = useState(null);
  const dispatch = useDispatch();
  const page = useSelector((state) => state.crypto.page);

  const { data, isLoading, isError, refetch } = useGetExchangesQuery({
    page,
    perPage: 20,
  });

  const exchanges = data || [];

  if (isLoading) return <p className="text-gray-400">Loading exchanges...</p>;

  if (isError) {
    return <ErrorState message="Failed to load exchanges" onRetry={refetch} />;
  }

  return (
    <div className="p-6">
      <div className="bg-[#111827] border border-gray-800 rounded-xl overflow-hidden">

        {/* Header */}
        <div className="grid grid-cols-12 px-6 py-4 text-gray-400 text-sm bg-[#0b1220]">
          <div className="col-span-1">#</div>
          <div className="col-span-5">Exchange</div>
          <div className="col-span-3 text-right">24h Volume (BTC)</div>
          <div className="col-span-3 text-right">Trust Score</div>
        </div>

        {/* Rows */}
        {exchanges.map((exchange, index) => (
      <div
  key={exchange.id}
  onClick={() => setSelectedExchange(exchange.id)}
  className="grid grid-cols-12 px-6 py-5 items-center border-t border-gray-800 hover:bg-[#1a2333] transition cursor-pointer"
>
            <div className="col-span-1 text-gray-400">
              {(page - 1) * 20 + index + 1}
            </div>

            <div className="col-span-5 flex items-center gap-4">
              <img
                src={exchange.image}
                alt={exchange.name}
                className="w-10 h-10 rounded-full bg-white p-1"
              />
              <div>
                <p className="text-white font-semibold">{exchange.name}</p>
                <p className="text-gray-400 text-sm">
                  Rank #{exchange.trust_score_rank}
                </p>
              </div>
            </div>

            <div className="col-span-3 text-right text-white font-semibold">
              {exchange.trade_volume_24h_btc.toFixed(2)}
            </div>

            <div className="col-span-3 text-right">
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  exchange.trust_score >= 7
                    ? "bg-green-500/20 text-green-400"
                    : exchange.trust_score >= 4
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {exchange.trust_score}/10
              </span>
            </div>

          </div>
      
      ))}
      {selectedExchange && (
  <ExchangeDetailModal
    exchangeId={selectedExchange}
    onClose={() => setSelectedExchange(null)}
  />
)}
      </div>

      <Pagination
        page={page}
        hasMore={exchanges.length === 20}
        onPrev={() => dispatch(setPage(page - 1))}
        onNext={() => dispatch(setPage(page + 1))}
      />
    </div>
  );
}
