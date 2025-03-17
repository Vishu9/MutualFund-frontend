import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMutualFunds } from "../redux/mutualFundSlice";
import PerformanceChart from "./PerformanceChart";
import SectorAllocation from "./SectorAllocation";
import InvestmentCard from "./InvestmentCard";
import Tabs from "./Tabs";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { funds, loading, error } = useSelector((state) => state.mutualFund);

  useEffect(() => {
    dispatch(fetchMutualFunds());
  }, [dispatch]);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-lg text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mutual Fund Dashboard</h1>

      {/* Investment Cards Section */}
      {/* <div className="flex gap-4 p-6 bg-black min-h-screen"> */}
      <div className="flex flex-wrap gap-4 p-4 bg-black">
        {funds.map((fund) => (
          <InvestmentCard
            key={fund.id}
            title={fund.name}
            value={`₹${fund.amount_invested}`}
            change={fund.returns_percent}
            // description="Returns"
            isPositive={fund.returns_percent >= 0} // Determines positive or negative change
          />
        ))}
      </div>
        {/* Tabs Section */}
      {/* <div className="p-6 bg-black min-h-screen"> */}
      <div className="p-4 bg-black">
        <Tabs />
      </div>
        
      {/* <PerformanceChart />
      <SectorAllocation /> */}
    </div>
  );
};

export default Dashboard;
