import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Mobile', value: 50 },
  { name: 'Tablet', value: 25 },
  { name: 'Desktop', value: 25 },
];

const COLORS = ['#66A2FF', '#FFCE54', '#8D9EA7'];

const UsersByDevice = () => {
  return (
    <div className='ml-16 '>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx={100}
          cy={100}
          innerRadius={60}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <text x={100} y={100} textAnchor="middle" dominantBaseline="middle" fontSize={16}>
          50%<br /><tspan fontSize={12}>Mobile</tspan>
        </text>
      </PieChart>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        {data.map((entry, index) => (
          <div key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center', marginRight: 20 }}>
            <div style={{ width: 10, height: 10, backgroundColor: COLORS[index % COLORS.length], marginRight: 5 }} />
            <span>{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersByDevice;
