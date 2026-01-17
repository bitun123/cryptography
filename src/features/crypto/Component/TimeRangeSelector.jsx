import { useDispatch, useSelector } from "react-redux";
import { setTimeRange } from "../../cryptoApi/slice/cryptoSlice";

const ranges = [
  { label: "7D", value: "7d" },
  { label: "30D", value: "30d" },
  { label: "1Y", value: "1y" },
];

export default function TimeRangeSelector() {
  const dispatch = useDispatch();
  const timeRange = useSelector((state) => state.crypto.timeRange);

  return (
    <div className="flex gap-2 mb-4">
      {ranges.map((r) => (
        <button
          key={r.value}
          onClick={() => dispatch(setTimeRange(r.value))}
          className={`px-3 py-1 rounded text-sm border transition ${
            timeRange === r.value
              ? "bg-blue-600 border-blue-500 text-white"
              : "bg-gray-800 border-gray-700 text-gray-300 hover:border-blue-400"
          }`}
        >
          {r.label}
        </button>
      ))}
    </div>
  );
}
