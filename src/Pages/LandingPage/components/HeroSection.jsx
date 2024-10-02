import React from 'react';
import heroimage from '../../../../public/landingpage/heroimage.png';

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-center w-full h-full bg-white mt-8 overflow-x-hidden">
      {/* Left Column */}
      <div className="w-full sm:w-2/3 flex flex-col justify-start px-6 md:px-16 flex-grow sm:ml-20">
        <h1 className="text-3xl lg:text-5xl font-semibold text-gray-800 mb-6 sm:mt-20">
          Take Control of Your Social Media
        </h1>
        <p className="text-gray-600 mb-12 text-[23px] mt-8">
          Lorem Ipsum ha sido el texto de Lorem Ipsum ha Lorem Ipsum ha sido el
          texto de Lorem Ipsum ha ha Lorem Ipsum ha sido el texto de Lorem Ipsum
          ha
        </p>

        {/* Buttons in a flex container */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <button className="px-12 whitespace-nowrap py-2 text-white bg-[#52CC8A] rounded-3xl shadow-md">
            Get Started
          </button>
          <button className="px-12 whitespace-nowrap py-2 bg-transparent border border-[#52CC8A] rounded-3xl hover:bg-blue-100">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="w-full flex justify-end items-center mt-6 md:mt-0">
        <div className="relative w-full max-w-[800px]">
          <img
            src={heroimage}
            alt="Hero"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
