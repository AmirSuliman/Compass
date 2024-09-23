import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts"

const data = [
  { name: "Dec 18", uv: 12000, revenue: 2000 },
  { name: "Dec 19", uv: 28000, revenue: 4000 },
  { name: "Dec 20", uv: 18000, revenue: 6000 },
  { name: "Dec 21", uv: 3000, revenue: 8000 },
  { name: "Dec 22", uv: 1500, revenue: 9000 },
  { name: "Dec 23", uv: 18000, revenue: 12000 },
  { name: "Dec 24", uv: 17000, revenue: 15000 },
  { name: "Dec 24", uv: 17000, revenue: 14000 },
  { name: "Dec 24", uv: 17000, revenue: 13000 },
  { name: "Dec 24", uv: 17000, revenue: 12000 },
  { name: "Dec 24", uv: 17000, revenue: 15000 },
]

const Linechart = () => {
  return (
    <div className='h-96 mt-4 md:mt-8'>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart data={data}>
          {/* Horizontal dashed grid lines */}
          <CartesianGrid strokeDasharray='3 3' vertical={false} />
          <XAxis dataKey='name' tick={{ fontSize: 12 }} />
          <YAxis
            tickFormatter={(value) => `$${value}`}
            className='text-xs md:text-base'
          />
          <Tooltip formatter={(value) => `$${value}`} />
          <Line
            type='monotone'
            dataKey='revenue'
            stroke='#FFA500'
            strokeWidth={3}
            dot={{ stroke: "#fff", strokeWidth: 2, r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Linechart
