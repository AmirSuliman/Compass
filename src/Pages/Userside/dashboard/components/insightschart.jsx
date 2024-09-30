import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan', Openrate: 4000, Ctr: 2400, Subscribers: 2400 },
  { name: 'Feb', Openrate: 3000, Ctr: 1398, Subscribers: 2210 },
  { name: 'Mar', Openrate: 2000, Ctr: 4800, Subscribers: 2290 },
  { name: 'Apr', Openrate: 2780, Ctr: 3908, Subscribers: 2000 },
  { name: 'May', Openrate: 1890, Ctr: 4800, Subscribers: 2181 },
  { name: 'Jun', Openrate: 2390, Ctr: 3800, Subscribers: 2500 },
  { name: 'Jul', Openrate: 3490, Ctr: 4300, Subscribers: 2100 }
];

const Chart = () => {
  const [hoveredBar, setHoveredBar] = useState(null);

  // Handle hover on a bar
 // Handle hover on a bar
 const handleMouseEnter = (data, index, e) => {
  const rect = e.target.getBoundingClientRect();
  setHoveredBar({
    ...data,
    x: rect.x + rect.width / 2, // Center tooltip horizontally
    y: rect.y - 10 // Position tooltip just above the bar
  });
};


  // Handle mouse leaving a bar
  const handleMouseLeave = () => {
    setHoveredBar(null);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px' }}>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="Openrate"
            fill="#3180F5"
            barSize={10}
            radius={[10, 10, 0, 0]}
            onMouseEnter={(data, index, e) => handleMouseEnter(data, index, e)}
            onMouseLeave={handleMouseLeave}
          />
          <Bar
            dataKey="Ctr"
            fill="#FDC546"
            barSize={10}
            radius={[10, 10, 0, 0]}
            onMouseEnter={(data, index, e) => handleMouseEnter(data, index, e)}
            onMouseLeave={handleMouseLeave}
          />
          <Bar
            dataKey="Subscribers"
            fill="#00AF50"
            barSize={10}
            radius={[10, 10, 0, 0]}
            onMouseEnter={(data, index, e) => handleMouseEnter(data, index, e)}
            onMouseLeave={handleMouseLeave}
          />
        </BarChart>
      </ResponsiveContainer>

      {hoveredBar && (
        <div
          style={{
            position: 'absolute',
            top: hoveredBar.y - 200, 
            left: hoveredBar.x - 300, 
            backgroundColor: 'rgba(255, 255, 255, 0.9)', 
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            pointerEvents: 'none',
            zIndex: 999,
            transform: 'translateY(-100%)' 
          }}
        >
          <p style={{ margin: 0, fontWeight: 'bold', color: 'black' }}>{hoveredBar.name}</p>
          <p style={{ margin: 0, color: '#3180F5' }}>Openrate: {hoveredBar.Openrate}</p>
          <p style={{ margin: 0, color: '#FDC546' }}>Ctr: {hoveredBar.Ctr}</p>
          <p style={{ margin: 0, color: '#00AF50' }}>Subscribers: {hoveredBar.Subscribers}</p>
        </div>
      )}
    </div>
  );
};

export default Chart;
