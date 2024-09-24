import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'GreenPart', value: 45 }, 
  { name: 'Remaining', value: 25 }, 
];

const COLORS = ['#00AF50', '#d3d3d3'];

const renderCustomLabel = ({ cx, cy }) => {
  const circleSize = 80; 

  return (
    <>
      <circle
        cx={cx} 
        cy={cy} 
        r={circleSize / 2} 
        fill="white"
      />
      <text
        x={cx}
        y={cy - 5} 
        fill="black"
        textAnchor="middle"
        dominantBaseline="central"
        style={{ fontSize: '12px', fontWeight: 'bold' }}
      >
        All Mails
      </text>
      <text
        x={cx}
        y={cy + 15} 
        fill="black"
        textAnchor="middle"
        dominantBaseline="central"
        style={{ fontSize: '14px', fontWeight: 'normal' }}
      >
        2,218
      </text>
    </>
  );
};

const GaugeChart = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={[{ value: 100 }]} 
          cx="50%"
          cy="50%"
          startAngle={0}
          endAngle={360}
          innerRadius={70}
          outerRadius={100} 
          fill="#d3d3d3" 
          dataKey="value"
        />

        <Pie
          data={data}
          cx="50%"
          cy="50%"
          startAngle={90}
          endAngle={-270} 
          innerRadius={65} 
          outerRadius={100} 
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          labelLine={false}
          label={renderCustomLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default GaugeChart;
