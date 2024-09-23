import Worldmap from "/images/world-map.png"

import Barchart from "./barchart"
import GrowthCards from "./growthcards"
import MapData from "./mapdata"
import Linechart from "./linechart"

const Community = () => {
  return (
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
  )
}

export default Community
