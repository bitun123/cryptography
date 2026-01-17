import React from "react";
import { useGetCryptoNewsQuery } from "../../features/cryptoApi/api/newsApi";

export default function News() {
  const { data, isLoading, isError, refetch } = useGetCryptoNewsQuery();
const news = data || [];
  if (isLoading)
    return <p className="text-gray-400 p-6">Loading news...</p>;

  if (isError)
    return (
      <div className="p-6 text-red-400">
        Failed to load news.
        <button
          className="ml-3 text-blue-400 underline"
          onClick={refetch}
        >
          Retry
        </button>
      </div>
    );

  return (
    <div className="p-6 max-w-full">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Latest News</h2>
        <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">
          LIVE
        </span>
      </div>

      {/* News List */}
      <div className="space-y-4">
        {news.map((news) => (
          <div
            key={news.id}
            className="bg-[#111827] border border-gray-800 rounded-xl p-5 hover:bg-[#1a2333] transition"
          >
            <h3 className="text-white font-semibold text-lg mb-2">
              {news.title}
            </h3>

            <p className="text-gray-400 text-sm mb-3">
              {news.body.slice(0, 120)}...
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="text-blue-400">{news.source}</span>
              •
              <span>{timeAgo(news.published_on)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function timeAgo(timestamp) {
  const seconds = Math.floor((Date.now() - timestamp * 1000) / 60);
  if (seconds < 60) return `${seconds} min ago`;
  const hours = Math.floor(seconds / 60);
  return `${hours}h ago`;
}
