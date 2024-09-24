import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 }
];

const Chart = () => {
  const [chartWidth, setChartWidth] = useState(window.innerWidth > 300 ? 750 : 300);

  // Adjust the chart width on window resize
  useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth > 300 ? 750 : 300);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <BarChart
      width={chartWidth}
      height={400}
      data={data}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="uv" fill="#3180F5" barSize={10} radius={[10, 10, 0, 0]} />
      <Bar dataKey="pv" fill="#FDC546" barSize={10} radius={[10, 10, 0, 0]} />
      <Bar dataKey="amt" fill="#00AF50" barSize={10} radius={[10, 10, 0, 0]} />
    </BarChart>
  );
};

export default Chart;
