import React, { useState } from 'react';
import { CalendarDays, MoveDown } from 'lucide-react';
import Statisticscard from './components/dashboardstatistics';
import Discovercontent from './components/discovercontent';
import InsightsChart from './components/insightschart';

const Userdashboard = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('All Mails');

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-8 items-start justify-between w-full">
        <div className="flex flex-col w-full sm:w-[70%]">
          <div className="flex flex-row items-center justify-between w-full">
            <h1 className="text-[14px] sm:text-[27px] text-[#1D1D2E] font-semibold">Marketing Campaign</h1>
            <div className="flex flex-col sm:flex-row gap-2">
              <button className="bg-white rounded-lg p-3 flex flex-row gap-2 border">
                <CalendarDays />
                <p className="font-medium text-[#272727]">1 Jan - 31 Jan 2024</p>
              </button>
            </div>
          </div>
          <Statisticscard />

          <div className="bg-white w-full p-1 sm:p-4 mt-6 rounded-lg">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <h1 className="text-[20px] font-medium">Insights</h1>
              <div className="bg-[#E4E4E4] p-2 flex flex-row gap-2 rounded-md border font-medium">
                <button
                  className={`px-4 p-2 rounded-md ${activeTab === 'All Mails' ? 'bg-black text-white' : 'bg-white text-black'}`}
                  onClick={() => handleTabChange('All Mails')}
                >
                  All Mails
                </button>
                <button
                  className={`px-4 p-2 rounded-md ${activeTab === 'Social Media' ? 'bg-black text-white' : 'bg-white text-black'}`}
                  onClick={() => handleTabChange('Social Media')}
                >
                  Social Media
                </button>
                <button
                  className={`px-4 p-2 rounded-md ${activeTab === 'Websites' ? 'bg-black text-white' : 'bg-white text-black'}`}
                  onClick={() => handleTabChange('Websites')}
                >
                  Websites
                </button>
              </div>
            </div>

            <div className="flex h-[0.5px] w-full bg-gray-300 mt-4 " />

            {/* Insights chart section */}
            <div className="flex flex-col gap-2 sm:flex-row items-center justify-between p-4 px-6 w-full mb-4">
              <div className="flex flex-row gap-6 text-gray-400 text-[12px] font-medium">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <div className="bg-[#3180F5] h-2 w-2 rounded-full" />
                  <p>Open Rate</p>
                </div>
                <div className="flex flex-row gap-2 items-center justify-center">
                  <div className="bg-[#FDC546] h-2 w-2 rounded-full" />
                  <p>CTR</p>
                </div>
                <div className="flex flex-row gap-2 items-center justify-center">
                  <div className="bg-[#00AF50] h-2 w-2 rounded-full" />
                  <p>Subscribers</p>
                </div>
              </div>
            </div>

            {/* Display the InsightsChart component */}
            <InsightsChart />
          </div>
        </div>

        {/* Right section */}
        <div className="flex-1 ">
          <Discovercontent />

          <div className="bg-white p-4 mt-4 rounded-md flex flex-col px-6">
            <div className="flex flex-row gap-4">
              <div className="bg-[#D4E6FF] rounded-full p-2">
                <img src="/Vector1.png" alt="img" />
              </div>
              <p className="text-[#4F4F4F]">Accounts Reached</p>
            </div>
            <div className="flex flex-row items-center justify-between w-full mt-6">
              <div className="flex flex-col ">
                <p className="text-[#4F4F4F] font-bold text-2xl">40k</p>
                <p className="text-sm text-[#4F4F4F]">+8.4K this week</p>
              </div>
              <p>+1.29%</p>
            </div>
          </div>

          {/* Funnel Section */}
          <div className="flex flex-col bg-white items-center justify-center rounded-md p-4 mt-4 w-full">
            <div className="flex flex-row items-start justify-between w-full">
              <h1 className="font-medium text-[20px]">Your funnel</h1>
            </div>
            <div
              className="bgimg mt-10 flex-col items-center justify-center w-full p-2"
              style={{
                backgroundImage: `url('/Group 1982249110.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                textAlign: 'center'
              }}
            >
              <p>13,932</p>
              <p>Reach</p>
            </div>
            <div className="flex flex-row w-full items-center justify-center gap-2 font-bold p-1">
              <MoveDown />
              <p>15,39%</p>
            </div>

            {/* Additional Funnel Content */}
            <div className="px-4 w-full">
              <div
                className="mt-2 flex-col items-center justify-center w-full p-1.5"
                style={{
                  backgroundImage: `url('/bgyellow.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  textAlign: 'center'
                }}
              >
                <p className="text-black">13,932</p>
                <p className="text-black">Visits</p>
              </div>
            </div>

            <div className="flex flex-row w-full items-center justify-center gap-2 font-bold p-1">
              <MoveDown />
              <p>15,39%</p>
            </div>

            <div className="w-full px-10">
              <div
                className="mt-2 flex-col items-center justify-center w-full p-1"
                style={{
                  backgroundImage: `url('/bgblue.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  textAlign: 'center'
                }}
              >
                <p>13,932</p>
                <p>Leads</p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between w-full p-4 mt-8">
              <div className="flex flex-row gap-1 text-[12px] items-center">
                <div className="rounded-full w-2.5 h-2.5 bg-[#00AF50]" />
                <p>Social media</p>
              </div>
              <div className="flex flex-row gap-1 text-[10px] items-center">
                <div className="rounded-full w-2.5 h-2.5 bg-[#FE971B]" />
                <p>Website</p>
              </div>
              <div className="flex flex-row gap-1 text-[12px] items-center">
                <div className="rounded-full w-2.5 h-2.5 bg-[#3180F5]" />
                <p>Email</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userdashboard;
