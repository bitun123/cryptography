import React from "react";
import { X } from "lucide-react";
import { useGetExchangeByIdQuery } from "../../cryptoApi/api/exchangeApi";

export default function ExchangeDetailModal({ exchangeId, onClose }) {
  const { data, isLoading, isError } = useGetExchangeByIdQuery(exchangeId);

  if (!exchangeId) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#0b1220] w-full max-w-lg rounded-xl border border-gray-800 p-6 relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X />
        </button>

        {isLoading && <p className="text-gray-400">Loading...</p>}
        {isError && <p className="text-red-400">Failed to load exchange info</p>}

        {data && (
          <>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={data.image}
                className="w-14 h-14 rounded-full bg-white p-1"
                alt={data.name}
              />
              <div>
                <h2 className="text-xl text-white font-bold">{data.name}</h2>
                <p className="text-gray-400 text-sm">{data.country || "Global"}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <Stat label="Trust Score" value={`${data.trust_score}/10`} />
              <Stat label="24h Volume (BTC)" value={data.trade_volume_24h_btc.toFixed(2)} />
              <Stat label="Year Established" value={data.year_established || "N/A"} />
              <Stat label="Rank" value={data.trust_score_rank} />
            </div>

            {data.description && (
              <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                {data.description.substring(0, 250)}...
              </p>
            )}

            {data.url && (
              <a
                href={data.url}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-blue-400 hover:underline"
              >
                Visit Website →
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-[#111827] p-3 rounded-lg border border-gray-800">
      <p className="text-gray-400 text-xs mb-1">{label}</p>
      <p className="text-white font-semibold">{value}</p>
    </div>
  );
}
