import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area
} from 'recharts';
import { ArrowUp } from 'lucide-react'; // Import from lucide-react

// Sample data to mimic the provided chart
const data = [
  { name: 'Jan', value: 50000 },
  { name: 'Feb', value: 75000 },
  { name: 'Mar', value: 72000 },
  { name: 'Apr', value: 150000 },
  { name: 'May', value: 250000 },
  { name: 'Jun', value: 65000 },
  { name: 'Jul', value: 80000 },
  { name: 'Aug', value: 85560 },
  { name: 'Sep', value: 45000 },
  { name: 'Oct', value: 55000 },
  { name: 'Nov', value: 60000 },
  { name: 'Dec', value: 70000 },
];

// Custom Tooltip styling
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{
        background: '#0E1B47', padding: '5px 10px', borderRadius: '8px', color: '#fff'
      }}>
        <p style={{ fontSize: '14px', fontWeight: 'bold' }}>${payload[0].value.toFixed(2)}</p>
      </div>
    );
  }
  return null;
};

// Custom hover bar (Arrow-shaped)
const CustomHoverBar = ({ points }) => (
  <g>
    <rect
      x={points[0].x - 10} y={points[0].y} width={20} height={300 - points[0].y}
      fill="rgba(32, 121, 255, 0.2)" // Blue highlight for hover
    />
    <g transform={`translate(${points[0].x - 8},${points[0].y - 16})`}>
      <ArrowUp color="#2079FF" size={16} />
    </g>
  </g>
);

const RevenueChart = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="name"
          axisLine={{ stroke: '#8B8B8B', strokeWidth: 2 }} // Custom X axis line
          tickLine={{ stroke: '#8B8B8B', strokeWidth: 2 }}  // Custom X axis tick line
          tick={{ fontSize: 12, fill: '#8B8B8B' }} // Customizing month labels
        />
        <YAxis
          axisLine={{ stroke: '#8B8B8B', strokeWidth: 2 }} // Custom Y axis line
          tickLine={{ stroke: '#8B8B8B', strokeWidth: 2 }}  // Custom Y axis tick line
          tickFormatter={(value) => `${(value / 1000)}k`}
          tick={{ fontSize: 12, fill: '#8B8B8B' }}
        />
        <Tooltip content={<CustomTooltip />} cursor={<CustomHoverBar />} />
        <Area
          type="monotone"
          dataKey="value"
          fill="url(#gradient)" // Gradient fill for area below the line
          stroke="none"
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(32, 121, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(32, 121, 255, 0)" />
          </linearGradient>
        </defs>
        <Line
          type="monotone"
          dataKey="value"
          stroke="#2079FF"
          strokeWidth={3}
          dot={{ r: 6, fill: "#fff", stroke: "#2079FF", strokeWidth: 2 }}
          activeDot={{
            r: 8,
            fill: "#fff",
            stroke: "#2079FF",
            strokeWidth: 2,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;
