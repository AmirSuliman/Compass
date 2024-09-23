import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { day: 'Mon', visits: 446 },
  { day: 'Tue', visits: 285 },
  { day: 'Wed', visits: 382 },
  { day: 'Thu', visits: 368 },
  { day: 'Fri', visits: 413 },
  { day: 'Sat', visits: 307 },
  { day: 'Sun', visits: 432 }
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#333' }} />
        <Tooltip />
        <Bar dataKey="visits" fill="#64B5F6" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;