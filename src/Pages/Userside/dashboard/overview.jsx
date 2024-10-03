import { ChevronDown, Plus } from 'lucide-react';
import { useState } from 'react';
import Cards from './components/cards';
import Contenttable from './components/contenttable';
import Detailtable from './components/detailstable';
import CustomLineChart from '../components/follwerschart';
import GenderStatisticsPieChart from './components/statisticbygender';
import UsersByDevice from './components/userbydevice';
import Chart from './components/profilevisit';
import { useNavigate } from 'react-router-dom';
import Previouscontent from './components/previouscontent';

const Overview = () => {
  const navigate = useNavigate();

  // State to manage the selected tab (7 days, Months, Years)
  const [selectedTab, setSelectedTab] = useState('7days');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <div className="flex flex-col gap-3 -mt-6">
        <div className="flex flex-col gap-3 sm:flex-row w-full items-center justify-between">
          <div className="flex flex-row gap-6 items-center justify-center font-semibold">
            {/* Tab buttons */}
            <button
              onClick={() => handleTabChange('7days')}
              className={`rounded-md p-2 px-3 ${
                selectedTab === '7days' ? 'bg-white text-gray-400' : ' text-gray-400'
              }`}
            >
              Last 7 Days
            </button>
            <button
              onClick={() => handleTabChange('months')}
              className={`rounded-md p-2 px-3 ${
                selectedTab === 'months' ? 'bg-white text-gray-400' : 'text-gray-400'
              }`}
            >
              Months
            </button>
            <button
              onClick={() => handleTabChange('years')}
              className={`rounded-md p-2 px-3 ${
                selectedTab === 'years' ? 'bg-white text-gray-400' : 'text-gray-400'
              }`}
            >
              Years
            </button>
          </div>
          <div className="flex flex-row gap-2">
            <button
              onClick={() => {
                navigate('/user/overview/connection');
              }}
              className="bg-white rounded-md p-3 flex flex-row gap-3 text-[#555555] font-semibold"
            >
              <img src="/image 10.png" alt="img" />
              <p>Instagram</p>
              <ChevronDown className="ml-3" />
            </button>
            <div className="bg-white rounded-full text-semi-bold p-3 ">
              <Plus />
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-200 h-[1.3px]" />
      </div>

      {/* Render content based on the selected tab */}
      {selectedTab === '7days' && (
        <>
          <Cards />
          <div className=" mt-4">
            <Detailtable />
            <Previouscontent />
          </div>
        </>
      )}

      {selectedTab === 'months' && (
        <>
          <Cards />
          <div className=" mt-4">
          <Detailtable />
          <Previouscontent />
          </div>
        </>
      )}

      {selectedTab === 'years' && (
        <>
          <Cards />
          <div className=" mt-4">
          <Detailtable />
          <Previouscontent />
          </div>
        </>
      )}

      <div className="flex flex-col sm:flex-row gap-4 w-full items-center justify-between mt-4">
        <div className="bg-white rounded-md p-4 w-full sm:w-[65%]">
          <h1 className="text-[#555555] text-[18px] mb-6 font-semibold">Followers</h1>
          <CustomLineChart />
        </div>
        <div className="flex-1 bg-white rounded-md p-4">
          <h1 className="text-[#555555] text-[18px] mb-6 font-semibold">Map Distribution</h1>
          <img src="/Map.png" alt="map" className="h-[300px]" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 w-full items-start justify-between mt-4">
        <div className="bg-white w-full h-[370px] p-4 rounded-md">
          <h1 className="text-[#555555] text-[18px] mb-6 font-semibold">Statistic By Gender</h1>
          <GenderStatisticsPieChart />
        </div>
        <div className="bg-white w-full p-4 h-[370px] rounded-md">
          <h1 className="text-[#555555] text-[18px] mb-6 font-semibold">Profile Visits</h1>
          <Chart />
        </div>
        <div className="bg-white w-full p-4 h-[370px] rounded-md items-center justify-center">
          <h1 className="text-[#555555] text-[18px] mb-6 font-semibold">Users By Device</h1>
          <UsersByDevice />
        </div>
      </div>
    </>
  );
};

export default Overview;
