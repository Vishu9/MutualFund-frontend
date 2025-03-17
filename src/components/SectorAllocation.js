import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Financial", value: 34 },
  { name: "Technology", value: 19 },
  { name: "Healthcare", value: 14.5 },
  { name: "Consumer Goods", value: 9.5 },
  { name: "Energy", value: 9.5 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28CD4"];

const SectorAllocation = () => {
  return (
    <div className="bg-gray-900 p-4 rounded-md mt-4">
      <h2 className="text-white text-lg mb-2">Sector Allocation</h2>
      <PieChart width={400} height={300}>
        <Pie data={data} cx={200} cy={150} labelLine={false} outerRadius={100} dataKey="value">
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default SectorAllocation;
