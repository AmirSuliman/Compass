import React from 'react'
import SubscribedChart from './components/SubscribedChart'
import Dropdown from './components/DropDown'
export default function SubscribedPlan() {
  return (
    <div>
      <div className='bg-white p-6 rounded-lg shadow-md'>
        <div className='flex md:flex-row flex-col md:items-center justify-between gap-4 md:gap-0'>
          <div>
            <div className='text-gray-500'>Statistics</div>
            <div className='font-bold text-xl'>Subscriptions</div>
          </div>

          <div className='flex gap-4'>
            <div className='flex items-center gap-1'>
              <div className='h-4 w-4 rounded-full bg-blue-500'></div>
              <span className='font-semibold'>Lite plan</span>
            </div>
            <div className='flex items-center gap-1'>
              <div className='h-4 w-4 rounded-full bg-yellow-500'></div>
              <span className='font-semibold'>Pro plan</span>
            </div>
            <Dropdown label="Select Time Period" values={['Weekly', 'Monthly', 'Quarterly']}/>
          </div>
        </div>

        <SubscribedChart />
      </div>
    </div>
  )
}
