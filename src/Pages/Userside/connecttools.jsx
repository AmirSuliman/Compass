import React, { useState } from 'react';
import Leftsidebar from './components/leftsidebarauth';
import { ChevronRight, ChevronLeft, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Connecttools = () => {
  const [activeTab, setActiveTab] = useState('socials');
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'socials':
        return (
          <div className="space-y-6 mt-8">
            {/* Social media buttons */}
            <div className="w-full p-4 bg-blue-100 font-medium px-4 border border-[#0866FF] rounded-full flex flex-row gap-3 text-[#0866FF] cursor-pointer">
              <img src="/image 9.png" alt="fb" />
              <p>Connect to Facebook</p>
            </div>

            <div className="w-full p-4 bg-[#F5D6EB] font-medium px-4 border border-[#AC2B83] rounded-full flex flex-row gap-3 text-[#AC2B83] cursor-pointer">
              <img src="/image 10.png" alt="ig" />
              <p>Connect to Instagram</p>
            </div>

            <div className="w-full p-4 bg-[#EBEBEB] font-medium px-4 border border-[#000000] rounded-full flex flex-row gap-3 text-[#000000] cursor-pointer">
              <img src="/image 12.png" alt="tt" />
              <p>Connect to Tiktok</p>
            </div>

            <div className="w-full p-4 bg-blue-100 font-medium px-4 border border-[#0866FF] rounded-full flex flex-row gap-3 text-[#0866FF] cursor-pointer">
              <img src="/image 9.png" alt="fb" />
              <p>Connect to Facebook</p>
            </div>

            <div className="w-full p-4 bg-[#EBEBEB] font-medium px-4 border border-[#000000] rounded-full flex flex-row justify-between text-[#000000] cursor-pointer">
              <p>Other</p>
              <ChevronDown />
            </div>
          </div>
        );
      case 'websites':
        return <div className="mt-8">Website connections go here.</div>;
      case 'email':
        return <div className="mt-8">Email connections go here.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-[45%] hidden sm:flex">
        <Leftsidebar />
      </div>

      <div className="flex-1 bg-[#f8f8f8] flex flex-col items-center justify-center">
        <div className="p-4 max-w-md w-full text-start mt-4">
          <h1 className="text-[25px] font-bold text-gray-800">
            Connect your social network
          </h1>
          <p>
            Lorem Ipsum ha sido el texto de relleno estándar de las Lorem Ipsum
            ha sido el texto de relleno estándar
          </p>

          {/* Tab Navigation */}
          <div className="flex space-x-20 mt-8 border-b">
            <button
              className={`pb-2 text-lg font-medium ${
                activeTab === 'socials'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('socials')}
            >
              Socials
            </button>
            <button
              className={`pb-2 text-lg font-medium ${
                activeTab === 'websites'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('websites')}
            >
              Websites
            </button>
            <button
              className={`pb-2 text-lg font-medium ${
                activeTab === 'email'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('email')}
            >
              Email
            </button>
          </div>

          {/* Tab Content */}
          {renderTabContent()}

          {/* Buttons */}
          <div className="flex flex-row gap-3 mt-8">
            <button
              type="button"
              onClick={handleBack}
              className="flex flex-row py-2 px-6 border border-gray-300 rounded-full items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
              Back
            </button>
            <button
              onClick={() => {
                navigate('/user/overview');
              }}
              type="submit"
              className="flex flex-row py-2 px-6 bg-blue-500 text-white rounded-full hover:bg-blue-600 items-center justify-center"
            >
              Finish
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connecttools;
