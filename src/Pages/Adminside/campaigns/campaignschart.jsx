import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

// Sample data for the chart
const data = [
  { name: 'Jan', value1: 100000000, value2: 20000000, value3: 50000000 },
  { name: 'Feb', value1: 75000000, value2: 40000000, value3: 60000000 },
  { name: 'Mar', value1: 50000000, value2: 90000000, value3: 80000000 },
  { name: 'Apr', value1: 120000000, value2: 50000000, value3: 40000000 },
  { name: 'May', value1: 60000000, value2: 75000000, value3: 110000000 },
  { name: 'Jun', value1: 110000000, value2: 40000000, value3: 90000000 },
  { name: 'Jul', value1: 90000000, value2: 100000000, value3: 70000000 },
  { name: 'Aug', value1: 130000000, value2: 80000000, value3: 50000000 },
  { name: 'Sep', value1: 40000000, value2: 60000000, value3: 120000000 },
  { name: 'Oct', value1: 70000000, value2: 50000000, value3: 80000000 },
  { name: 'Nov', value1: 60000000, value2: 90000000, value3: 90000000 },
  { name: 'Dec', value1: 100000000, value2: 80000000, value3: 60000000 },
];

// Custom Tooltip styling
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{
        background: '#fff', padding: '5px 10px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', color: '#333'
      }}>
        <p>{`${label}`}</p>
        <p>{`Value: ${payload[0].value.toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};

const MultiLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#8884d8" floodOpacity="0.7" />
          </filter>
        </defs>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: '#8B8B8B' }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => `${(value / 1000000)}M`}
          tick={{ fontSize: 12, fill: '#8B8B8B' }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="value1"
          stroke="#00AF50"
          strokeWidth={3}
          dot={false}
          filter="url(#shadow)"
        />
        <Line
          type="monotone"
          dataKey="value2"
          stroke="#FDC546"
          strokeWidth={3}
          dot={false}
          filter="url(#shadow)"
        />
        <Line
          type="monotone"
          dataKey="value3"
          stroke="#2079FF"
          strokeWidth={3}
          dot={false}
          filter="url(#shadow)"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MultiLineChart;
