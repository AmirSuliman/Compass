import React from 'react';
import img from '../../../../public/landingpage/tilt_bg.png'; // Replace with your actual image path
import bgImage from '../../../../public/landingpage/stackedimage.png'; // Replace with the actual image you want to display below
import './styles.css'; // Ensure this path is correct

export default function EngageMinds() {
  return (
    <div>
      <div
        className="flex flex-col md:flex-row mx-12"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          height: '100vh',
        }}
      >
        {/* Left Column */}
        <div className="w-full md:w-2/3 p-16 flex flex-col">
          <h2 className="text-3xl font-bold mb-4 mt-16">Engaging Creative Minds via Technology</h2>
          <p className="text-lg text-gray-700 mt-8">
            Discover how our service elevates your social media presence. Our analytics empower you to make informed decisions and drive engagement.
          </p>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 flex flex-col p-16">
          {/* Card 1 */}
          <div className="bg-white shadow-md mb-4 p-8 border-2 border-transparent border-gradient-to-r">
            <h3 className="font-semibold text-2xl">90%</h3>
            <p className="text-gray-600">Increase your engagement rates with our tailored strategies.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-md p-8 border-2 border-transparent border-gradient-to-r">
            <h3 className="font-semibold text-2xl">75%</h3>
            <p className="text-gray-600">Boost your follower growth with our expert insights.</p>
          </div>
        </div>
      </div>

      {/* Image Below */}
      <div className="relative -mt-60 flex justify-center"> {/* Adjust -mt-60 for the overlap percentage */}
  <img 
    src={bgImage} // The image you want to display below
    alt="Engagement" 
    className="w-auto h-auto"
    style={{ position: 'relative', zIndex: 0 }} // Ensure the image is below the text
  />
</div>
    </div>
  );
}
