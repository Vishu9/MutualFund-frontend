import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMutualFunds } from "../redux/mutualFundSlice";
import PerformanceChart from "./PerformanceChart";
import SectorAllocation from "./SectorAllocation";

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

      {funds.map((fund) => (
        <div key={fund.id} className="bg-gray-800 text-white p-4 mb-4 rounded-md">
          <h2 className="text-xl font-semibold">{fund.name}</h2>
          <p>Investment: ₹{fund.amount_invested}</p>
          <p>Returns: {fund.returns_percent}%</p>
        </div>
      ))}

      <PerformanceChart />
      <SectorAllocation />
    </div>
  );
};

export default Dashboard;
