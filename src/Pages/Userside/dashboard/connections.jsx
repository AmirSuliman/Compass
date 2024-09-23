import React, { useState } from 'react';
import Socials from "./components/socials";

const Connections = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('Socials');

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-[26px] font-semibold">Connected Socials</h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <div className="w-auto sm:w-[400px] p-4 bg-blue-100 font-medium px-4 border border-[#0866FF] rounded-full flex flex-row items-center justify-between text-[#0866FF] cursor-pointer">
            <div className="flex flex-row gap-2">
              <img src="/image 9.png" alt="fb" />
              <p>Connect to Facebook</p>
            </div>
            <img src="/Logo1.png" alt="img" className="w-7 h-7" />
          </div>

          <div className="w-auto sm:w-[400px] p-4 bg-[#EBEBEB] font-medium px-4 border border-[#000000] rounded-full flex flex-row items-center justify-between text-[#000000] cursor-pointer">
            <div className="flex flex-row gap-2">
              <img src="/image 12.png" alt="fb" />
              <p>Connect to Tiktok</p>
            </div>
            <img src="/Logo1.png" alt="img" className="w-7 h-7" />
          </div>
        </div>

        <h1 className="text-[24px] font-medium mt-8">Connections</h1>

        {/* Tabs Section */}
        <div className="relative flex flex-col gap-2 mt-4 text-gray-500 font-medium cursor-pointer">
          <div className="flex flex-row gap-14 relative">
            <p
              className={`cursor-pointer ${activeTab === 'Socials' ? 'text-blue-500' : 'text-gray-500'}`}
              onClick={() => handleTabChange('Socials')}
            >
              Socials
            </p>
            <p
              className={`cursor-pointer ${activeTab === 'Websites' ? 'text-blue-500' : 'text-gray-500'}`}
              onClick={() => handleTabChange('Websites')}
            >
              Websites
            </p>
            <p
              className={`cursor-pointer ${activeTab === 'Email' ? 'text-blue-500' : 'text-gray-500'}`}
              onClick={() => handleTabChange('Email')}
            >
              Email
            </p>
          </div>
          <div className=" w-[300px] h-[1px] bg-gray-400 "></div>
          {/* Blue underline based on the active tab */}
          <div
            className={`absolute bottom-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out`}
            style={{
              left: activeTab === 'Socials' ? '0px' : activeTab === 'Websites' ? '100px' : '220px',
              width: activeTab === 'Socials' ? '50px' : activeTab === 'Websites' ? '70px' : '50px'
            }}
          />
        </div>

        {/* Render content based on the active tab */}
        {activeTab === 'Socials' && <Socials />}
        {activeTab === 'Websites' && (
          <div>
            {/* Websites content goes here */}
            <p>Websites content coming soon...</p>
          </div>
        )}
        {activeTab === 'Email' && (
          <div>
            {/* Email content goes here */}
            <p>Email content coming soon...</p>
          </div>
        )}
      </div>
      </>
    );
};

export default Connections;
