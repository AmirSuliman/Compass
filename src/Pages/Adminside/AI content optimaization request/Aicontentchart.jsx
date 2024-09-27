import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

// Sample data for the chart
const data = [
  { date: 'Sept 10', requests: 20, remaining: 80 },  // remaining = 100 - requests
  { date: 'Sept 11', requests: 60, remaining: 40 },
  { date: 'Sept 12', requests: 40, remaining: 60 },
  { date: 'Sept 13', requests: 90, remaining: 10 },
  { date: 'Sept 14', requests: 30, remaining: 70 },
  { date: 'Sept 15', requests: 10, remaining: 90 },
  { date: 'Sept 16', requests: 50, remaining: 50 },
];

// Custom Tooltip styling
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#FFBC42', padding: '5px 10px', borderRadius: '5px', color: '#fff', fontWeight: 'bold'
      }}>
        {`${payload[0].value} Requests`}
      </div>
    );
  }
  return null;
};

const StackedBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: '#8B8B8B' }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: '#8B8B8B' }}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip content={<CustomTooltip />} />

        {/* Full bar for background (remaining) */}
        <Bar
          dataKey="requests"
          stackId="a"
          fill="#2079FF"  // Dark color on top
          radius={[10, 10, 0, 0]}
          barSize={12}
        />
        <Bar
          dataKey="remaining"
          stackId="a"
          fill="rgba(32, 121, 255, 0.15)"  // Light background color
          radius={[10, 10, 0, 0]}
          barSize={12}
        />

        {/* Bar for actual requests (dark bar on top of background) */}
        
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarChart;
