import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const Chart = () => {
  // Data for the chart
  const data = [
    { name: "Request Done", value: 10, color: "#4A90E2" }, // Blue
    { name: "Pending", value: 30, color: "#F5A623" }, // Yellow
  ];

  // Custom colors for each segment
  const COLORS = data.map((entry) => entry.color);

  return (
    <div className="relative flex flex-col items-center justify-center">
      <PieChart width={250} height={250}>
        {/* Gray background as the base */}
        <Pie
          data={[{ value: 100 }]} // Full base circle
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={100}
          fill="#849AA9" // Gray color for the base
          stroke="none"
        />

        {/* Pie chart segments for request done and pending */}
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          startAngle={90} // Start from top to match the style
          endAngle={-260} // Full donut style
          innerRadius={80}
          outerRadius={120}
          paddingAngle={3} // Slight gap between sections
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        {/* Tooltip for hover display */}
        <Tooltip />
      </PieChart>

     

      {/* Legend */}
      <div className="flex flex-row gap-2 items-center mt-4">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-[#4A90E2]" />
          <p className="text-sm text-gray-700">Request Done</p>
        </div>
        <div className="flex items-center gap-1 ml-4">
          <div className="w-3 h-3 rounded-full bg-[#F5A623]" />
          <p className="text-sm text-gray-700">Pending</p>
        </div>
      </div>
    </div>
  );
};

export default Chart;
