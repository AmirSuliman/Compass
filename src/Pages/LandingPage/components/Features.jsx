import React from 'react';
import { SquareUser, ChartColumnIncreasing, Users } from 'lucide-react'; // Importing icons from Lucide

export default function Features() {
  return (
    <div className="w-full py-10 px-6 md:px-12 bg-white">
      {/* Center Aligned Heading and Paragraph */}
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-5xl font-semibold text-gray-800 mb-4 max-w-[90%] md:max-w-[60%] mx-auto">
          Unlock the Power of Social Media with Our Key Features
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Lorem Ipsum ha sido el texto de Lorem Ipsum ha Lorem Ipsum ha sido el{' '}
          <br /> texto de Lorem Ipsum ha
        </p>
      </div>

      {/* Cards in a Row */}
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
        {/* Card 1 */}
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md min-h-[250px] w-full md:w-1/3">
          <div className="flex items-center justify-center w-16 h-16 bg-[#B2E7B9] rounded-full mb-4">
            <SquareUser className="w-10 h-10 text-black" />
          </div>
          <h3 className="text-lg md:text-xl text-[#343434] text-center font-semibold mb-2">
            Streamline Your Social Media Presence
          </h3>
          <p className="text-gray-600 text-center">
            Lorem Ipsum ha sido el texto de <br /> Lorem Ipsum ha Lorem Ipsum ha
            sido el texto de Lorem Ipsum ha
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md min-h-[250px] w-full md:w-1/3">
          <div className="flex items-center justify-center w-16 h-16 bg-[#B2E7B9] rounded-full mb-4">
            <ChartColumnIncreasing className="w-10 h-10 text-black" />
          </div>
          <h3 className="text-lg md:text-xl text-[#343434] text-center font-semibold mb-2">
            Measure your Success
          </h3>
          <p className="text-gray-600 text-center">
            Lorem Ipsum ha sido el texto de <br /> Lorem Ipsum ha Lorem Ipsum ha
            sido el texto de Lorem Ipsum ha
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md min-h-[250px] w-full md:w-1/3">
          <div className="flex items-center justify-center w-16 h-16 bg-[#B2E7B9] rounded-full mb-4">
            <Users className="w-10 h-10 text-black" />
          </div>
          <h3 className="text-lg md:text-xl text-[#343434] text-center font-semibold mb-2">
            Analyze Engagement, Grow Your Audience with Real-Time Insights
          </h3>
          <p className="text-gray-600 text-center">
            Lorem Ipsum ha sido el texto de <br /> Lorem Ipsum ha Lorem Ipsum ha
            sido el texto de Lorem Ipsum ha
          </p>
        </div>
      </div>
    </div>
  );
}
