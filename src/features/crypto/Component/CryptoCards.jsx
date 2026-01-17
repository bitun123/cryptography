import { useDispatch, useSelector } from "react-redux";
import { setSelectedCoin } from "../../cryptoApi/slice/cryptoSlice";

export default function CryptoCards({ cryptos }) {
  const dispatch = useDispatch();
  const selectedUuid = useSelector(
    (state) => state.crypto.selectedCoin.uuid
  );

  if (!cryptos?.length) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {cryptos.slice(0, 4).map((crypto) => {
        const isActive = crypto.uuid === selectedUuid;

        return (
          <div
            key={crypto.uuid}
            onClick={() =>
              dispatch(
                setSelectedCoin({
                  uuid: crypto.uuid,
                  name: crypto.name,
                  symbol: crypto.symbol,
                })
              )
            }
            className={`
              bg-gray-800 p-4 rounded-lg border transition-all cursor-pointer
              ${isActive
                ? "border-gray-200 ring-2 scale-[1.02]"
                : "border-gray-700 hover:border-blue-400"}
            `}
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-400 text-xs">{crypto.name}</p>
                <p className="text-white font-semibold">{crypto.symbol}</p>
              </div>
              <img src={crypto.iconUrl} alt={crypto.name} className="w-8 h-8" />
            </div>

            <p className="text-2xl font-bold text-white mb-1">
              ${Number(crypto.price).toLocaleString()}
            </p>

            <p
              className={`text-sm ${
                Number(crypto.change) >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {Number(crypto.change) >= 0 ? "↑" : "↓"}{" "}
              {Math.abs(Number(crypto.change))}%
            </p>
          </div>
        );
      })}
    </div>
  );
}
