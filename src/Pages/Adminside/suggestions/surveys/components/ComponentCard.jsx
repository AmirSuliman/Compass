import React from 'react';
import us from '../../../../../../public/us.png'
import uk from '../../../../../../public/united-kingdom.png'
import swit from '../../../../../../public/switzerland.png'
export default function ComponentCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 h-[60vh]">
      {/* Heading */}
      <h2 className="text-xl font-semibold text-[#1E1B39] mb-4">Top Countries</h2>

      {/* Country List */}
      <div className="flex items-center mb-6">
        <img
          src={us}
          alt="United States flag"
          className="w-14 h-14 rounded-full mr-4" // Fully round flag
        />
        <span className="text-md font-medium text-[#1E1B39]">United State</span>
        <span className="text-md text-[#1A2B88] ml-auto">48%</span>
      </div>

      <div className="flex items-center mb-6">
        <img
          src={uk}
          alt="United Kingdom flag"
          className="w-14 h-14 rounded-full mr-4" // Fully round flag
        />
        <span className="text-md font-medium text-[#1E1B39]">United Kingdom</span>
        <span className="text-md text-[#1A2B88] ml-auto">12%</span>
      </div>

      <div className="flex items-center mb-6">
        <img
          src={swit}
          alt="Switzerland flag"
          className="w-14 h-14 rounded-full mr-4" // Fully round flag
        />
        <span className="text-md font-medium text-[#1E1B39]">Switzerland</span>
        <span className="text-md text-[#1A2B88] ml-auto">9%</span>
      </div>
    </div>
  );
}
