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
  { name: 'Jan', openrate: 4000,crt: 2400, subscribers: 2400 },
  { name: 'Feb', openrate: 3000,crt: 1398, subscribers: 2210 },
  { name: 'Mar', openrate: 2000,crt: 4800, subscribers: 2290 },
  { name: 'Apr', openrate: 2780,crt: 3908, subscribers: 2000 },
  { name: 'May', openrate: 1890,crt: 4800, subscribers: 2181 },
  { name: 'Jun', openrate: 2390,crt: 3800, subscribers: 2500 },
  { name: 'Jul', openrate: 3490,crt: 4300, subscribers: 2100 }
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="openrate" fill="#3180F5" barSize={10} radius={[10, 10, 0, 0]} />
        <Bar dataKey="crt" fill="#FDC546" barSize={10} radius={[10, 10, 0, 0]} />
        <Bar dataKey="subscribers" fill="#00AF50" barSize={10} radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
