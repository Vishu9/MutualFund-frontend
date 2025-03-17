import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "Feb 1", value: 500000 },
  { date: "Feb 10", value: 520000 },
  { date: "Feb 20", value: 530000 },
  { date: "Mar 1", value: 550000 },
];

const PerformanceChart = () => {
  return (

    <div className="bg-[#111] p-4 rounded-lg">
      <h1 className="text-white text-sm mb-2">Performance Summary</h1>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#8884d8" />
          <YAxis stroke="#8884d8" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
