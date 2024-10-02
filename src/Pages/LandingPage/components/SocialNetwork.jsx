import React from 'react';
import socialImage from '../../../../public/landingpage/SocialImage.png'; // Update the path as needed

export default function SocialNetwork() {
  return (
    <div className="flex gap-8 mt-8 mb-4 p-8 flex-col md:flex-row justify-center items-center w-full h-full bg-white px-[10%]">
      {/* Left Column */}
      <div className="sm:w-2/5 ">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 sm:-mt-20">
          Connect all the social networks you love
        </h2>
        <p className="text-gray-600 mt-10">
          We currently support Facebook, Instagram, LinkedIn, and Twitter. More
          to come. Felix is purpose-built for ease of use and complete
          flexibility.
        </p>
      </div>

      {/* Right Column - Image */}
      <div className="sm:w-3/5 w-full flex items-center justify-center">
        <img
          src={socialImage}
          alt="Social Network"
          className="w-full h-auto m-auto block max-w-full"
        />
      </div>
    </div>
  );
}
