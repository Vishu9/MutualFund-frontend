import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const InvestmentCard = ({ title, value, change, isPositive, scheme, description }) => {
  return (
    <div className="w-[288px] h-[104px] bg-[#0D1B2A] rounded-2xl p-4 text-white flex flex-col justify-between shadow-lg">
      <div className="flex justify-between items-center">
        <p className="text-sm opacity-70">{title}</p>
        {change !== undefined && (
          <div
            className={`flex items-center text-sm ${
              isPositive ? "text-green-400" : "text-red-400"
            }`}
          >
            {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
            <span className="ml-1">{change}%</span>
          </div>
        )}
      </div>
      <div className="text-xl font-semibold">{value}</div>
      {scheme && <p className="text-sm opacity-80">{scheme}</p>}
    </div>


//     <div className="w-[288px] h-[104px] bg-[#0D1B2A] text-white rounded-lg shadow-md p-4 flex flex-col justify-between">
//     <div className="text-sm text-gray-400">{title}</div>
//     <div className="text-xl font-semibold">{value}</div>
//     <div className="flex justify-between text-sm">
//       <span className={`text-${change > 0 ? "green" : "red"}-500`}>
//         {change > 0 ? `+${change}%` : `${change}%`}
//       </span>
//       <span className="text-gray-400">{description}</span>
//     </div>
//   </div>
  );
};

export default InvestmentCard;
