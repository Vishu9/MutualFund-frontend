import React, { useState } from "react";
import PerformanceChart from "./PerformanceChart"; 
import PortfolioComposition from "./PortfolioComposition"; 

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("performance");

  return (
    <div className="w-[1160px] mx-auto bg-[#0D1B2A] p-4 rounded-lg">
      {/* Tabs Navigation */}
      <div className="flex border-b border-gray-700">
        <button
          className={`px-6 py-2 text-white ${
            activeTab === "performance" ? "border-b-2 border-blue-500" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("performance")}
        >
          Performance Metrics
        </button>
        <button
          className={`px-6 py-2 text-white ${
            activeTab === "portfolio" ? "border-b-2 border-blue-500" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("portfolio")}
        >
          Portfolio Composition
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "performance" ? <PerformanceChart /> : <PortfolioComposition />}
      </div>
    </div>
  );
};

export default Tabs;
