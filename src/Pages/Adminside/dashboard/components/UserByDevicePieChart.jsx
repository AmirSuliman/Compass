import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Mobile', value: 50 },
  { name: 'Tablet', value: 30 },
  { name: 'Desktop', value: 20 },
];

const COLORS = ['#4285F4', '#F4B400', '#8F8F8F']; 

const UserByDevicePieChart = () => {
  return (
    <div className='bg-white p-6 shadow-md rounded-lg'>
      <div className='text-lg font-bold'>Users By Device</div>
      <ResponsiveContainer width='100%' height={300}>
        <PieChart>
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            innerRadius={80} // Make it a donut chart
            outerRadius={120} // Outer radius for better visibility
            fill='#8884d8'
            dataKey='value'
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {/* Custom Legend */}
      <div className='flex justify-center mt-5'>
        <div className='flex items-center mr-3'>
          <div className='w-2.5 h-2.5 bg-blue-500 mr-1.5 rounded-full' />
          Mobile
        </div>
        <div className='flex items-center mr-3'>
          <div className='w-2.5 h-2.5 bg-yellow-400 mr-1.5 rounded-full' />
          Tablet
        </div>
        <div className='flex items-center'>
          <div className='w-2.5 h-2.5 bg-gray-400 mr-1.5 rounded-full' />
          Desktop
        </div>
      </div>
    </div>
  )
}

export default UserByDevicePieChart
