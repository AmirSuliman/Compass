import React from 'react';
import phoneImg from '../../../../public/landingpage/phone.png';
import bgImage from "../../../../public/landingpage/bg.jpeg";
export default function ElevateBlob() {
  return (
    <div
      className="flex flex-col md:flex-row justify-between w-full bg-cover bg-center p-8"
      style={{
        backgroundImage: `url(${bgImage})`
      }}
    >
      {/* Column 1 - Heading and Text (Aligned at the Top) */}
      <div className="md:w-1/3 w-full flex flex-col justify-start items-center  p-4">
      <h2 className="text-3xl md:text-3xl lg:text-5xl font-semibold text-black mb-4 mt-16">
    Elevate Your Content Strategy with AI Recommendations
</h2>

      </div>

      {/* Column 2 - Phone Image */}
      <div className="md:w-1/3 w-full flex justify-center items-center p-4">
        <img
          src={phoneImg} // Actual phone image
          alt="Phone"
          className="w-auto h-auto object-contain"
        />
      </div>

      {/* Column 3 - Text and Button (Aligned at the Bottom) */}
      <div className="md:w-1/3 w-full flex flex-col justify-end p-4 mb-16">
        <p className="text-black text-xl mb-4">
        Lorem Ipsum ha sido el texto de Lorem Ipsum ha Lorem Ipsum ha sido el texto de Lorem Ipsum ha ha Lorem Ipsum ha sido el texto de Lorem Ipsum ha
        </p>
        <button className="px-12 py-2 text-white bg-[#52CC8A] rounded-3xl shadow-md self-start">
    Get Started
</button>


      </div>
    </div>
  );
}
