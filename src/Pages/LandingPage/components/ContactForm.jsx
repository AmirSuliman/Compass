import React from 'react';
import { Mail } from 'lucide-react'; 
import bgImage from '../../../../public/landingpage/contactbg.png'; 

export default function ContactForm() {
  return (
    <div
      className="flex items-center justify-center mt-10 md:mt-0 mr-0 md:mr-20 h-[70vh] ml-10 mr-10 rounded-xl md:h-[80vh] bg-[#B2E7B9] md:bg-transparent" 
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'contain', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        overflow: 'hidden',
      }}
    >
      <div className="bg-transparent p-6 md:p-8 w-[90%] md:w-[70%] rounded-lg px-5"> 
        <h2 className="text-[1.5rem] md:text-[2rem] font-bold mb-4 text-center">
          Subscribe to get information, latest news and other interesting offers with us
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 justify-center">
        <div className='flex flex-row items-center p-4 border w-[40%] bg-white rounded-lg'>
            <Mail className='text-gray-400 mr-3' /> 
            <input 
              type='text' 
              placeholder='Email' 
              className='flex-grow border-none outline-none placeholder-gray-500 text-gray-800'
            />
          </div>


          <button className="bg-[#52CC8A] text-white px-8 py-2 md:px-14 md:py-3 rounded-2xl"> 
            Subscribe
          </button>
        </div>

        <div className="flex items-center mt-4 justify-center">
          <input type="checkbox" className="mr-2 " />
          <label className="text-gray-700 text-sm md:text-sm"> 
            By proceeding, you agree to the Terms of Service and Privacy Policy
          </label>
        </div>
      </div>
    </div>
  );
}
