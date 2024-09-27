import React from "react"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Men", value: 65 },
  { name: "Women", value: 35 },
]

const COLORS = ["#4285F4", "#F4B400"] // Blue for Men, Yellow for Women

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <g>
      {/* White background rectangle */}
      <rect
        x={x - 20} // Adjust position for the background box
        y={y - 10} // Adjust position for the background box
        width="40" // Box width based on the text
        height="20" // Box height based on the text
        fill="white"
        rx={5} // Rounded corners
      />
      {/* Text with percentage */}
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor="middle"
        dominantBaseline="middle"
        className="font-bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </g>
  );
};

const SubscriptionPieChart = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <div className="text-lg font-bold">Statistics By Gender</div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={CustomLabel} // Custom label for white background and percentage
            outerRadius={100}
            // innerRadius={60}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {/* Custom Legend */}
      <div className="flex justify-center">
        <div className="flex items-center mr-3">
          <div className="w-2.5 h-2.5 bg-blue-500 mr-1.5 rounded-full" />
          Men
        </div>
        <div className="flex items-center">
          <div className="w-2.5 h-2.5 bg-yellow-400 mr-1.5 rounded-full" />
          Women
        </div>
      </div>
    </div>
  )
}

export default SubscriptionPieChart
