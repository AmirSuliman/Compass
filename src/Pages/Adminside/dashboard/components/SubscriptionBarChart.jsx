import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', blue: 50000, yellow: 20000 },
  { month: 'Feb', blue: 30000, yellow: 10000 },
  { month: 'Mar', blue: 50000, yellow: 30000 },
  { month: 'Apr', blue: 40000, yellow: 20000 },
  { month: 'May', blue: 900000, yellow: 500000 },
  { month: 'Jun', blue: 500000, yellow: 400000 },
  { month: 'Jul', blue: 200000, yellow: 100000 },
  { month: 'Aug', blue: 300000, yellow: 250000 },
  { month: 'Sep', blue: 400000, yellow: 350000 },
  { month: 'Oct', blue: 500000, yellow: 400000 },
  { month: 'Nov', blue: 500000, yellow: 300000 },
  { month: 'Dec', blue: 400000, yellow: 200000 },
];

const SubscriptionBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={375} className="mt-6">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis tickFormatter={(value) => `${value / 1000}k`} />
        <Tooltip formatter={(value) => new Intl.NumberFormat().format(value)} />
        <Bar dataKey="blue" fill="#4285F4" barSize={50} />
        <Bar dataKey="yellow" fill="#F4B400" barSize={50} />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default SubscriptionBarChart
