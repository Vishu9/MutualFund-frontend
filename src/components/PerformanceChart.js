import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "Feb 1", value: 500000 },
  { date: "Feb 10", value: 520000 },
  { date: "Feb 20", value: 530000 },
  { date: "Mar 1", value: 550000 },
];

const PerformanceChart = () => {
  return (
    <div className="bg-gray-900 p-4 rounded-md mt-4">
      <h2 className="text-white text-lg mb-2">Performance Summary</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
