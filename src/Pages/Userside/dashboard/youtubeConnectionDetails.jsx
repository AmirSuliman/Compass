import React, { useState } from "react"
import DefaultLayout from "../../../Layout/defaultlayout"
import {
  ChartNoAxesCombined,
  MoveUpRight,
  UserPlus,
  UserRoundMinus,
} from "lucide-react"
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts"

const YoutubeConnectionDetails = () => {
  const [activeTab, setActiveTab] = useState("Community")

  const tabs = [
    "Community",
    "Published Videos",
    "Viewed Videos",
    "Competetiors",
  ]

  const data = [
    { name: "Dec 18", uv: 12000 },
    { name: "Dec 19", uv: 28000 },
    { name: "Dec 20", uv: 18000 },
    { name: "Dec 21", uv: 3000 },
    { name: "Dec 22", uv: 1500 },
    { name: "Dec 23", uv: 18000 },
    { name: "Dec 24", uv: 17000 },
    { name: "Dec 24", uv: 17000 },
    { name: "Dec 24", uv: 17000 },
    { name: "Dec 24", uv: 17000 },
    { name: "Dec 24", uv: 17000 },
  ]

  return (
    <DefaultLayout>
      {/* Tabs */}
      <div className='w-full border-b border-gray-300'>
        <div className='flex space-x-8'>
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`pb-2 border-b-2 transition-colors duration-200 cursor-pointer ${
                activeTab === tab
                  ? "border-blue-600"
                  : "border-transparent hover:border-blue-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              <button
                className={`transition-colors duration-200 ${
                  activeTab === tab
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                {tab}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className='bg-white py-4 px-8 rounded-md mt-6'>
        <div>
          <div className='font-bold'>Growth</div>
          <div className='flex justify-between'>
            <div>
              <div className='font-semibold'>Net Growth</div>
              <div>Jun 2023 - Dec 2023</div>
            </div>
            <div className='flex gap-4'>
              <div className='flex gap-4 border border-gray-300 rounded-md p-4'>
                <div>
                  <ChartNoAxesCombined color='blue' />
                  <div>Growth</div>
                </div>
                <div>
                  <div className='font-bold'>23,430</div>
                  <div className='flex text-xs'>
                    <span>+412</span>
                    <span className='flex'>
                      <MoveUpRight color='blue' size={16} />
                      <span className='text-blue-500'>23%</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex gap-4 border border-gray-300 rounded-md p-4'>
                <div>
                  <UserPlus color='blue' />
                  <div>Follow</div>
                </div>
                <div>
                  <div className='font-bold'>23,430</div>
                  <div className='flex text-xs'>
                    <span>+412</span>
                    <span className='flex'>
                      <MoveUpRight color='blue' size={16} />
                      <span className='text-blue-500'>23%</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex gap-4 border border-gray-300 rounded-md p-4'>
                <div>
                  <UserRoundMinus color='blue' />
                  <div>Unfollow</div>
                </div>
                <div>
                  <div className='font-bold'>23,430</div>
                  <div className='flex text-xs'>
                    <span>+412</span>
                    <span className='flex'>
                      <MoveUpRight color='blue' size={16} />
                      <span className='text-blue-500'>23%</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Updated ResponsiveContainer with fixed height */}
        <div className='h-64 mt-4'>
          <ResponsiveContainer width='100%' height={400}>
            <BarChart data={data}>
              <CartesianGrid
                vertical={true}
                horizontal={true}
                strokeDasharray='3 3'
              />
              <XAxis dataKey='name' interval={0} tick={{ fontSize: 12 }} />
              <YAxis ticks={[0, 1500, 3000, 15000, 25000, 50000]} />
              <Tooltip />
              <Bar
                dataKey='uv'
                fill='#4285F4'
                radius={[100, 100, 0, 0]}
                barSize={20}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default YoutubeConnectionDetails
