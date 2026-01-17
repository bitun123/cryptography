import { useGetGlobalStatsQuery } from "../../cryptoApi/api/cryptoApi";

function formatNumber(num) {
  if (!num) return "0";
  if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
  if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
  if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
  return `$${num.toLocaleString()}`;
}

export default function GlobalStats() {
  const { data, isLoading } = useGetGlobalStatsQuery();

  if (isLoading) {
    return <div className="text-gray-400 mb-6">Loading global stats...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StatCard title="Total Market Cap" value={formatNumber(data.totalMarketCap)} />
      <StatCard title="24h Volume" value={formatNumber(data.total24hVolume)} />
      <StatCard title="BTC Dominance" value={`${data.btcDominance.toFixed(2)}%`} />
      <StatCard title="Active Cryptos" value={data.totalCoins.toLocaleString()} />
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
      <p className="text-gray-400 text-sm mb-1">{title}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}
