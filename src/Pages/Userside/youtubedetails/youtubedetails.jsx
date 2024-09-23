import React, { useState } from "react"
import {
  ChartNoAxesCombined,
  MoveUpRight,
  UserPlus,
  UserRoundMinus,
} from "lucide-react"
import Linechart from "./components/linechart"
import Barchart from "./components/barchart"
import Worldmap from "/images/world-map.png"

const Youtubedetails = () => {
  const [activeTab, setActiveTab] = useState("Community")

  const tabs = [
    "Community",
    "Published Videos",
    "Viewed Videos",
    "Competetiors",
  ]

  const worldMapData = [
    {
      country: "Filipina",
      progress: 70,
      noOfUsers: "12k",
    },
    {
      country: "Thailand",
      progress: 60,
      noOfUsers: "106k",
    },
    {
      country: "Japan",
      progress: 30,
      noOfUsers: "16k",
    },
    {
      country: "Russia",
      progress: 55,
      noOfUsers: "16k",
    },
  ]

  const growthData = [
    {
      icon: <ChartNoAxesCombined color='blue' />,
      label: "Growth",
      value: "23,430",
      growthValue: "+412",
      percentage: "23%",
    },
    {
      icon: <UserPlus color='blue' />,
      label: "Follow",
      value: "23,430",
      growthValue: "+412",
      percentage: "23%",
    },
    {
      icon: <UserRoundMinus color='blue' />,
      label: "Unfollow",
      value: "23,430",
      growthValue: "+412",
      percentage: "23%",
    },
  ]

  return (
    <div>
      <div className='w-full border-b border-gray-300'>
        <div className='flex text-sm space-x-2 md:space-x-8'>
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

      <div className='bg-white rounded-md py-2 px-4 md:py-4 md:px-8 mt-6'>
        <div>
          <div className='text-xl font-bold'>Growth</div>
          <div className='flex flex-col mt-4 md:flex-row justify-between'>
            <div>
              <div className='font-semibold'>Net Growth</div>
              <div className='text-sm'>Jun 2023 - Dec 2023</div>
            </div>

            <div className='flex flex-col md:flex-row mt-2 md:m-0 gap-4'>
              {growthData.map((item, index) => (
                <div
                  key={index}
                  className='flex gap-4 border justify-between md:justify-start border-gray-300 rounded-md p-4'
                >
                  <div>
                    {item.icon}
                    <div className='text-xs'>{item.label}</div>
                  </div>
                  <div>
                    <div className='font-bold'>{item.value}</div>
                    <div className='flex text-xs'>
                      <span className='text-xs'>{item.growthValue}</span>
                      <span className='flex'>
                        <MoveUpRight color='blue' size={16} />
                        <span className='text-blue-500 text-xs'>
                          {item.percentage}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* First Chart: Bar Chart */}
        <Barchart />
      </div>

      <div className='bg-white rounded-md py-2 px-4 md:py-4 md:px-8 mt-6'>
        <div className='text-xl font-bold'>Revenue</div>
        <div>$12,390</div>

        {/* Second Chart: Line Chart */}
        <Linechart />
      </div>

      <div className='bg-white rounded-md py-2 px-4 md:py-4 md:px-8 mt-6'>
        <div className='text-xl font-bold'>Top Countries</div>

        <div className='flex flex-col md:flex-row gap-4'>
          <img src={Worldmap} alt='' />

          <div className='w-full flex flex-col justify-between mt-4'>
            {worldMapData?.map((data) => (
              <div>
                <div>{data.country}</div>
                <div className='flex items-center'>
                  <div className='bg-gray-200 h-3 rounded-full w-full max-w-[80%] md:max-w-[90%]'>
                    <div
                      className='bg-blue-500 h-3 rounded-tl-full rounded-bl-full'
                      style={{ width: `${data.progress}%` }}
                    ></div>
                  </div>
                  <div className='ml-4 font-bold'>{data.noOfUsers}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Youtubedetails
