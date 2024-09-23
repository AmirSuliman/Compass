import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
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

const Barchart = () => {
  return (
    <div className='h-96 mt-6'>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={data}>
          <CartesianGrid
            vertical={true}
            horizontal={true}
            strokeDasharray='3 3'
          />
          <XAxis dataKey='name' interval={0} className='text-xs' />
          <YAxis
            ticks={[0, 1500, 3000, 15000, 25000, 50000]}
            className='text-xs md:text-base'
          />
          <Tooltip />
          <Bar
            dataKey='uv'
            fill='#4285F4'
            radius={[100, 100, 0, 0]}
            barSize={15}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Barchart
