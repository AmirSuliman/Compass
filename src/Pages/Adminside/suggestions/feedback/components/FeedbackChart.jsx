import React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { day: "MON", feedback: 7 },
  { day: "TUE", feedback: 8 },
  { day: "WED", feedback: 9 },
  { day: "THU", feedback: 12 },
  { day: "FRI", feedback: 7 },
  { day: "SAT", feedback: 6 },
  { day: "SUN", feedback: 8 },
]

const FeedbackChart = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-2 md:mb-0 md:items-center justify-between">
        <div>
          <div className='text-lg font-bold text-[#9291a5]'>Statistics</div>
          <div className='text-lg font-bold'>Feedback</div>
        </div>

        <div className="flex gap-12">
          <span>Daily</span>
          <span>Week</span>
          <span>Month</span>
        </div>
      </div>

      <ResponsiveContainer width='100%' height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='day' tick={{ fill: "#8884d8", fontSize: 14 }} />
          <YAxis domain={[6, 12]} tick={{ fill: "#8884d8", fontSize: 14 }} />
          <Tooltip />
          <Line
            type='monotone'
            dataKey='feedback'
            stroke='#8884d8'
            strokeWidth={2}
            dot={{ r: 6, fill: "#8884d8" }}
            activeDot={{ r: 8, fill: "#8884d8" }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className='highlight-thursday flex justify-center items-center mt-4'>
        <div className='p-2 bg-blue-100 text-blue-700 font-bold rounded-lg'>
          THU
        </div>
      </div>
    </div>
  )
}

export default FeedbackChart
