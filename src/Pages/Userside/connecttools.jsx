import Leftsidebar from "./components/leftsidebarauth";
import { ChevronRight, ChevronLeft, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Connecttools = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div className="flex flex-row h-[100vh]">
      <div className="w-[45%] hidden sm:flex">
        <Leftsidebar />
      </div>

      <div className="sm:w-[130vh] bg-[#f8f8f8] flex flex-col items-center justify-center">
        <div className="p-4 max-w-md w-full text-start mt-4">
          <h1 className="text-[25px] font-bold text-gray-800">Connect your social network</h1>
          <p>Lorem Ipsum ha sido el texto de relleno estándar
          de las Lorem Ipsum ha sido el texto de relleno estándar</p>
         <div className="space-y-6 mt-8">
           <div className="w-full p-4 bg-blue-100 font-medium px-4 border border-[#0866FF] rounded-full flex flex-row gap-3 text-[#0866FF] cursor-pointer">
            <img src="/image 9.png" alt="fb"/>
            <p>Connect to Facebook</p>
           </div>

           <div className="w-full p-4 bg-[#F5D6EB] font-medium px-4 border border-[#AC2B83] rounded-full flex flex-row gap-3 text-[#AC2B83] cursor-pointer">
            <img src="/image 10.png" alt="fb"/>
            <p>Connect to Instagram</p>
           </div>

           <div className="w-full p-4 bg-[#EBEBEB] font-medium px-4 border border-[#000000] rounded-full flex flex-row gap-3 text-[#000000] cursor-pointer">
            <img src="/image 12.png" alt="fb"/>
            <p>Connect to Tiktok</p>
           </div>

           <div className="w-full p-4 bg-blue-100 font-medium px-4 border border-[#0866FF] rounded-full flex flex-row gap-3 text-[#0866FF] cursor-pointer">
            <img src="/image 9.png" alt="fb"/>
            <p>Connect to Facebook</p>
           </div>

           <div className="w-full p-4 bg-[#EBEBEB] font-medium px-4 border border-[#000000] rounded-full flex flex-row justify-between text-[#000000] cursor-pointer">
            <p>Other</p>
            <ChevronDown/>
           </div>

         </div>
          

            <div className="flex flex-row gap-3 mt-8">
              <button
                type="button" 
                onClick={handleBack}
                className="flex flex-row py-2 px-6 border border-gray-300 rounded-full items-center justify-center"
              >
                <ChevronLeft className="w-6 h-6" />
                Back
              </button>
              <button
                type="submit"
                className="flex flex-row py-2 px-6 bg-blue-500 text-white rounded-full hover:bg-blue-600 items-center justify-center"
              >
                Finish
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Connecttools;
