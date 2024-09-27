import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', blue: 650000, yellow: 820000 },
  { month: 'Feb', blue: 700000, yellow: 450000 },
  { month: 'Mar', blue: 250000, yellow: 990000 },
  { month: 'Apr', blue: 480000, yellow: 210000 },
  { month: 'May', blue: 900000, yellow: 500000 },
  { month: 'Jun', blue: 500000, yellow: 400000 },
  { month: 'Jul', blue: 200000, yellow: 100000 },
  { month: 'Aug', blue: 300000, yellow: 250000 },
  { month: 'Sep', blue: 400000, yellow: 350000 },
  { month: 'Oct', blue: 580000, yellow: 740000 },
  { month: 'Nov', blue: 350000, yellow: 300000 },
  { month: 'Dec', blue: 400000, yellow: 820000 },
];

const SubscribedChart = () => {
  return (
    <ResponsiveContainer width="100%" height={375} className="mt-6">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        {/* Adjust the Y-axis domain to shift the bars up slightly */}
        <YAxis tickFormatter={(value) => `${value / 1000}k`} domain={[0, 'auto']} padding={{ bottom: 30 }} />
        <Tooltip formatter={(value) => new Intl.NumberFormat().format(value)} />
        {/* Adding the radius property to round the bars */}
        <Bar dataKey="blue" fill="#4285F4" barSize={30} radius={[20, 20, 20, 20]} />
        <Bar dataKey="yellow" fill="#F4B400" barSize={30} radius={[20, 20, 20, 20]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SubscribedChart;
