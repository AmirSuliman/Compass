import Dropdown from "./components/Dropdown"
import MapCard from "./components/MapCard"
import SubscriptionBarChart from "./components/SubscriptionBarChart"
import SubscriptionPieChart from "./components/SubscriptionPieChart"

import TopCards from "./components/TopCards"
import UserByDevicePieChart from "./components/UserByDevicePieChart"

const Dashboard = () => {
  return (
    <div className='grid gap-4'>
      <TopCards />

      <div className='bg-white p-6 rounded-lg shadow-md'>
        <div className='flex items-center justify-between'>
          <div>
            <div className='text-gray-500'>Statistics</div>
            <div className='font-bold text-xl'>Subscriptions</div>
          </div>

          <div className='flex gap-4'>
            <div className='flex items-center gap-1'>
              <div className='h-4 w-4 rounded-full bg-blue-500'></div>
              <span className='font-semibold'>Lite</span>
            </div>
            <div className='flex items-center gap-1'>
              <div className='h-4 w-4 rounded-full bg-yellow-500'></div>
              <span className='font-semibold'>Pro</span>
            </div>
            <Dropdown label="Select Year" values={['2023', '2022', '2021']}/>
          </div>
        </div>

        <SubscriptionBarChart />
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        <SubscriptionPieChart />

        <MapCard />

        <UserByDevicePieChart />
      </div>

    </div>
  )
}

export default Dashboard
