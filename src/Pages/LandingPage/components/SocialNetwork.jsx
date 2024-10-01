import React from 'react';
import socialImage from '../../../../public/landingpage/SocialImage.png'; // Update the path as needed

export default function SocialNetwork() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full h-full bg-white p-6 md:px-32 px-4 mt-10 -mb-24">
      {/* Left Column */}
      <div className="sm:w-2/5 w-full flex flex-col -mt-32">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Connect all the social networks you love
        </h2>
        <p className="text-gray-600 mt-6">
          We currently support Facebook, Instagram, LinkedIn, and Twitter. More to come. Felix is purpose-built for ease of use and complete flexibility.
        </p>
      </div>

      {/* Right Column - Image */}
      <div className="sm:w-3/5 w-full flex justify-center mt-4 sm:mt-0">
        <img
          src={socialImage}
          alt="Social Network"
          className="w-full h-auto object-cover md:max-h-[500px] max-w-full"
        />
      </div>
    </div>
  );
}
