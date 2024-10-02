import React from 'react';
import { User, Share2, CalendarClock, Repeat2 } from 'lucide-react'; // Example icons from Lucide
import howImg1 from '../../../../public/landingpage/howitworks1.png';
import howImg2 from '../../../../public/landingpage/howitworks2.png';

const HowItWorks = () => {
  return (
    <div className="container mx-auto p-5 sm:p-16">
      {/* Heading */}
      <h2 className="text-3xl lg:text-5xl font-semibold text-start mb-8">
        How It Works
      </h2>

      {/* Main Flex Container */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Cards with reduced vertical gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 md:w-1/2 md:mr-8">
          <div className="p-4 bg-[#B2E7B9] shadow-md rounded-lg h-[250px] flex flex-col justify-between">
            <div className="flex items-center mb-2">
              <div className="p-2 bg-white rounded-md mr-2">
                <User className="text-black" />
              </div>
              <h3 className="font-bold text-xl ml-4">
                Create your free account
              </h3>
            </div>
            <p className="flex-1 mt-3 text-[#343434]">
              Lorem Ipsum ha sido el texto de Lorem Ipsum ha Lorem Ipsum ha sido
              el texto de Lorem Ipsum ha
            </p>
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg h-[250px] flex flex-col justify-between">
            <div className="flex items-center mb-2">
              <div className="p-2 bg-[#B2E7B9] rounded-md mr-2">
                <Share2 className="text-black" />
              </div>
              <h3 className="font-bold text-xl ml-4">Connect your channels</h3>
            </div>
            <p className="flex-1 mt-3 text-[#343434]">
              Lorem Ipsum ha sido el texto de Lorem Ipsum ha Lorem Ipsum ha sido
              el texto de Lorem Ipsum ha
            </p>
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg h-[250px] flex flex-col justify-between">
            <div className="flex items-center mb-2">
              <div className="p-2 bg-[#B2E7B9] rounded-md mr-2">
                <CalendarClock className="text-black" />
              </div>
              <h3 className="font-bold text-xl ml-4">Schedule your posts</h3>
            </div>
            <p className="flex-1 mt-3 text-[#343434]">
              Lorem Ipsum ha sido el texto de Lorem Ipsum ha Lorem Ipsum ha sido
              el texto de Lorem Ipsum ha
            </p>
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg h-[250px] flex flex-col justify-between">
            <div className="flex items-center mb-2">
              <div className="p-2 bg-[#B2E7B9] rounded-md mr-2">
                <Repeat2 className="text-black" />
              </div>
              <h3 className="font-bold text-xl ml-4">
                Publish & get your planning on point
              </h3>
            </div>
            <p className="flex-1 mt-3 text-[#343434]">
              Lorem Ipsum ha sido el texto de Lorem Ipsum ha Lorem Ipsum ha sido
              el texto de Lorem Ipsum ha
            </p>
          </div>
          <div>
            {' '}
            <button className="px-12 py-3 text-white bg-[#52CC8A] rounded-full shadow-md self-start">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Column - Images */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <img
            src={howImg1}
            alt="Image 1"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src={howImg2}
            alt="Image 2"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
