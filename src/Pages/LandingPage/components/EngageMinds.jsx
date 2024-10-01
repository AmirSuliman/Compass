import React from 'react';

export default function EngageMinds() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between w-full h-full bg-white mb-8 ">
      {/* Left Column - Aligned at the top */}
      <div className="w-full sm:w-2/5 flex flex-col justify-start px-6 md:px-12 mt-24 sm:ml-8 ">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6 mt-4 ">
          Engaging Creative Minds via Technology
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mt-16">
          Discover how our service elevates your social media presence. Our
          analytics empower you to make informed decisions and drive engagement.
        </p>
      </div>

      {/* Right Column - Image Aligned to Right Edge */}
      <div className="w-full sm:w-3/5 flex justify-center md:justify-end items-center mt-8 md:mt-0 px-4 md:px-0">
        <div className="relative w-full max-w-[600px] md:max-w-[900px]">
          <img src="/stackimg.png" alt="Hero" className="w-full h-auto " />
        </div>
      </div>
    </section>
  );
}
