import { useDispatch, useSelector } from "react-redux";
import { useGetCryptosQuery } from "../../features/cryptoApi/api/cryptoApi";
import { setPage } from "../../features/cryptoApi/slice/cryptoSlice";

import CryptoCards from "../../features/crypto/Component/CryptoCards";
import Pagination from "../../features/crypto/Component/ui/Pagination";
import ErrorState from "../../features/crypto/Component/ui/ErrorState";
import MarketCapChart from "../../features/crypto/Component/MarketCapChart";
import CoinPriceChart from "../../features/crypto/Component/CoinPriceChart";
import TimeRangeSelector from "../../features/crypto/Component/TimeRangeSelector";
import GlobalStats from "../../features/crypto/Component/GlobalStats";

export default function About() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.crypto.page);

  const { data, isLoading, isError, refetch } = useGetCryptosQuery(page);

  if (isLoading) {
    return <div className="text-white p-6">Loading...</div>;
  }

  if (isError) {
    return (
      <ErrorState
        message="Failed to load cryptocurrency data"
        onRetry={refetch}
      />
    );
  }

  const cryptos = data || [];

  return (
    <div className="p-6 flex flex-col gap-2 ">
      <h1 className="text-2xl text-white mb-6">Cryptocurrency</h1>
      <div className="flex flex-col">
        <CryptoCards cryptos={cryptos} />
        <Pagination
          page={page}
          hasMore={cryptos.length === 20}
          onPrev={() => dispatch(setPage(page - 1))}
          onNext={() => dispatch(setPage(page + 1))}
        />
      </div>

      <TimeRangeSelector />
      <div className="flex flex-col gap-3">
        <CoinPriceChart />
        <MarketCapChart />
          <GlobalStats />
      </div>
    </div>
  );
}
