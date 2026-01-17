import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { useGetCoinMarketCapHistoryQuery } from "../../cryptoApi/api/cryptoApi";

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-gray-900 border border-gray-700 p-3 rounded shadow text-sm">
      <p className="text-gray-300">{label}</p>
      <p className="text-blue-400 font-semibold">
        ${payload[0].value.toLocaleString()}
      </p>
    </div>
  );
}

export default function MarketCapChart() {
const { uuid, name, symbol } = useSelector(
  (state) => state.crypto.selectedCoin
);
const timeRange = useSelector((state) => state.crypto.timeRange);

const { data, isLoading } = useGetCoinMarketCapHistoryQuery({
  uuid,
  timeRange,
});


  if (isLoading)
    return <div className="text-gray-400">Loading {name} market cap...</div>;

  return (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
      <h3 className="text-white mb-4 font-semibold">
      {name} Market Cap ({timeRange}) – {symbol}

      </h3>

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
          <XAxis dataKey="day" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="marketCap"
            stroke="#3B82F6"
            fill="#3B82F6"
            fillOpacity={0.25}
            isAnimationActive={true}
            animationDuration={900}
            animationEasing="ease-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
