import React from 'react';
import heroimage from '../../../../public/landingpage/heroimage.png';

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-stretch w-full h-full bg-white mt-8">
      {/* Left Column - Aligned at the top */}
      <div className="md:w-2/5 w-full flex flex-col justify-start px-6 md:px-16 flex-grow">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 mt-24">
          Take Control of Your Social Media
        </h1>
        <p className="text-gray-600 mb-12 text-xl">
          Lorem Ipsum ha sido el texto de Lorem Ipsum ha Lorem Ipsum ha sido el texto de Lorem Ipsum ha ha Lorem Ipsum ha sido el texto de Lorem Ipsum ha
        </p>

        {/* Buttons in a flex container, stacked on tablet and mobile */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <button className="px-12 py-2 text-white bg-[#52CC8A] rounded-3xl shadow-md">
            Get Started
          </button>
          <button className="px-12 py-2 bg-transparent border border-[#52CC8A] rounded-3xl hover:bg-blue-100">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Column - Image Aligned to Right Edge */}
      <div className="md:w-3/5 w-full flex justify-end items-center mt-6 md:mt-0">
        <div className="relative w-full h-full max-w-[600px]"> {/* Adjust max-width for tablet */}
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
