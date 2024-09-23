import React, { useState } from "react"

import Linechart from "./components/community/linechart"
import Barchart from "./components/community/barchart"
import Worldmap from "/images/world-map.png"
import GrowthCards from "./components/community/growthcards"
import MapData from "./components/community/mapdata"
import Cards from "./components/publishedvideos/cards"
import PublishedVideosLinechart from "./components/publishedvideos/linechart"
import ListOfVideosTable from "./components/publishedvideos/listofvideostable"
import { CloudDownload, Search } from "lucide-react"

const Youtubedetails = () => {
  const [activeTab, setActiveTab] = useState("Community")

  const tabs = [
    "Community",
    "Published Videos",
    "Viewed Videos",
    "Competetiors",
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

      {activeTab === "Community" && (
        <>
          <div className='bg-white rounded-md py-2 px-4 md:py-4 md:px-8 mt-4'>
            <div>
              <div className='text-xl font-bold'>Growth</div>
              <div className='flex flex-col mt-4 md:flex-row justify-between'>
                <div>
                  <div className='font-semibold'>Net Growth</div>
                  <div className='text-sm'>Jun 2023 - Dec 2023</div>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 mt-2 md:m-0 gap-4'>
                  <GrowthCards />
                </div>
              </div>
            </div>

            {/* First Chart: Bar Chart */}
            <Barchart />
          </div>

          <div className='bg-white rounded-md py-2 px-4 md:py-4 md:px-8 mt-4'>
            <div className='text-xl font-bold'>Revenue</div>
            <div>$12,390</div>

            {/* Second Chart: Line Chart */}
            <Linechart />
          </div>

          <div className='bg-white rounded-md py-2 px-4 md:py-4 md:px-8 mt-4'>
            <div className='text-xl font-bold'>Top Countries</div>

            <div className='flex flex-col md:flex-row gap-4 mt-4'>
              <img src={Worldmap} alt='' />

              <div className='w-full flex flex-col justify-between'>
                <MapData />
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === "Published Videos" && (
        <>
          <div className='bg-white rounded-md py-2 px-4 md:py-4 md:px-8 mt-4'>
            <div className='text-xl font-bold'>Published Videos</div>
            <div className='grid grid-cols-2 md:grid-cols-6 gap-2 mt-4'>
              <Cards />
            </div>
            <PublishedVideosLinechart />
          </div>

          <div className='bg-white rounded-md py-2 px-4 md:py-4 md:px-8 mt-4'>
            <div className='flex flex-col md:flex-row gap-2 items-start md:items-center justify-between'>
              <span className='text-lg font-bold'>List of Videos</span>
              <div className='flex items-center mt-4 gap-2'>
                <div className='bg-[#f8f8f8] flex px-4 py-3 rounded-full gap-2 items-center'>
                  <CloudDownload size={16} />
                  <span className='text-xs text-nowrap'>Download CSV</span>
                </div>
                <div className='relative w-full'>
                  <input
                    type='text'
                    placeholder='Search...'
                    className='w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f8f8f8] rounded-full'
                  />
                  <button
                    onClick={() => {}}
                    className='absolute right-3 top-[43%] transform -translate-y-1/2 text-gray-500 hover:text-blue-600'
                  >
                    <Search size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className='w-full overflow-auto mt-4'>
              <ListOfVideosTable />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Youtubedetails
