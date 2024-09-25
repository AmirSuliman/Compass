import React from 'react';
import socialImage from '../../../../public/landingpage/social.png'; // Update the path as needed

export default function SocialNetwork() {
  return (
    <div className="flex flex-col md:flex-row justify-center w-full h-full bg-white p-6 md:px-28 px-4">
      {/* Left Column */}
      <div className="md:w-2/5 w-full flex flex-col px-4 mt-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Connect all the social networks you love
        </h2>
        <p className="text-gray-600">
          We currently support Facebook, Instagram, LinkedIn, and Twitter. More to come. Felix is purpose-built for ease of use and complete flexibility.
        </p>
      </div>

      {/* Right Column - Image */}
      <div className="md:w-3/5 w-full flex justify-center items-center mt-4 md:mt-0">
        <img
          src={socialImage}
          alt="Social Network"
          className="w-full h-auto object-cover md:max-h-[400px] md:w-auto max-w-full" // Ensure image fills container nicely
        />
      </div>
    </div>
  );
}
