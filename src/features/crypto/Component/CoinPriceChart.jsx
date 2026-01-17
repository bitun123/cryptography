import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { useGetCoinHistoryQuery } from "../../cryptoApi/api/cryptoApi";

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-gray-900 border border-gray-700 p-3 rounded shadow text-sm">
      <p className="text-gray-300">{label}</p>
      <p className="text-yellow-400 font-semibold">
        ${payload[0].value.toLocaleString()}
      </p>
    </div>
  );
}

export default function CoinPriceChart() {
const { uuid, name, symbol } = useSelector(
  (state) => state.crypto.selectedCoin
);
const timeRange = useSelector((state) => state.crypto.timeRange);

const { data, isLoading } = useGetCoinHistoryQuery({ uuid, timeRange });

  if (isLoading)
    return <div className="text-gray-400">Loading {name} chart...</div>;

  return (
<div className="bg-gray-800 p-4 rounded-lg border border-gray-700 transition-all duration-300 ease-out">

<h3 className="text-white mb-4 font-semibold">
  {name} Price ({timeRange}) – {symbol}
</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
          <XAxis dataKey="day" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip content={<CustomTooltip />} />
        <Line
  type="monotone"
  dataKey="price"
  stroke="#F59E0B"
  strokeWidth={2}
  dot={false}
  isAnimationActive={true}
  animationDuration={800}
  animationEasing="ease-out"
/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
