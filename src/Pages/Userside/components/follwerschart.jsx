import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'January', followers: 50000 },
  { name: 'February', followers: 75000 },
  { name: 'March', followers: 100000 },
  { name: 'April', followers: 150000 },
  { name: 'May', followers: 200000 },
  { name: 'June', followers: 220000 },
  { name: 'July', followers: 250000 },
];

const CustomLineChart = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 20, right: 20, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3180F5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3180F5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 250000]} tickFormatter={(value) => `${value / 1000}K`} />
          <Tooltip formatter={(value) => `+${value}`} />
          <Line
            type="monotone"
            dataKey="followers"
            stroke="#3180F5"
            strokeWidth={3}
            dot={{ r: 6, fill: "#3180F5", strokeWidth: 2 }}
            activeDot={{ r: 8 }}
            fill="url(#colorFollowers)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
