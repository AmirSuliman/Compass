import React, { useState } from "react";
import Nav from "./components/nav";
import { ChevronDown } from "lucide-react";
import TargetAudiencePopup from "./components/addtargetaudiencepopup";
import UpdateTargetAudiencePopup from "./components/updatetargetaudiencepopup";

const Targetaudience = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isEditPopupVisible, setEditPopupVisible] = useState(false); // State for edit popup

  const handleOpenPopup = () => {
    setPopupVisible(true);
  };

  const handleOpenEditPopup = () => {
    setEditPopupVisible(true); // Open edit popup
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleCloseEditPopup = () => {
    setEditPopupVisible(false); // Close edit popup
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-2xl font-semibold">Set Target Audience</h1>
        <div className="flex flex-row gap-3">
          <div className="bg-white p-3 flex flex-row gap-2 rounded-lg">
            <img src="/image 13.png" alt="img"/>
            <p>Youtube</p>
            <ChevronDown className="ml-4"/>
          </div>
          <div className="text-white bg-black rounded-lg p-3 text-[12px]">
            Total Number of recommendation used
          </div>
        </div>
      </div>

      <Nav />

      <div className="flex flex-row gap-4 mt-4">
        <button className="px-6 p-2 border font-medium rounded-full border-[#0866FF] bg-[#FDC5465C]">Start Ups</button>
        <button className="px-6 p-2 border font-medium rounded-full border-[#0866FF] bg-[#FDC5465C]">Banking Companies</button>
        <button className="px-6 p-2 border font-medium rounded-full border-[#0866FF] bg-[#FDC5465C]">Entrepreneurs</button>
        <button onClick={handleOpenPopup} className="px-6 p-2 border font-medium rounded-full border-[#0866FF] bg-[#FDC5465C]">Add more</button>
        <button className="px-6 p-2 border font-medium rounded-full border-[#0866FF] bg-[#FDC5465C]">Saved Audience</button>
      </div>

      <table className="w-full mt-8 border-collapse">
        <thead className="bg-blue-600 text-white font-normal">
          <tr>
            <td className="p-4 text-left">Audience Name</td>
            <td className="p-4 text-left">Interests</td>
            <td className="p-4 text-left">Pains</td>
            <td className="p-4 text-left">Platform</td>
            <td className="p-4 text-left">Gains</td>
            <td className="p-4 text-left">Motivations</td>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr onClick={handleOpenEditPopup}> {/* Open edit popup on row click */}
            <td className="p-4 text-left">Startup</td>
            <td className="p-4 text-left">Lorem Ipsum ha sido el texto de relleno estándar de las...</td>
            <td className="p-4 text-left">Lorem</td>
            <td className="p-4 text-left flex flex-row gap-2 items-center justify-center">
              <img src="/linkedin.png" alt="img"/> Linkedln
            </td>
            <td className="p-4 text-left">Lorem</td>
            <td className="p-4 text-left">Lorem Ipsum ha sido el texto de relleno</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-white p-4 mt-3">
        <div className="p-4">
          <p>1. Lorem Ipsum Ha Sido El Texto De Relleno Estándar De Las El Texto De Relleno Estándar De Las?</p>
          <select className="mt-1 block w-2/3 text-sm text-gray-700 p-4 border rounded-md">
            <option value="">Create a new audience</option>
            <option value="18-24">option</option>
            <option value="25-34">option</option>
            <option value="35-44">option</option>
            <option value="45-54">option</option>
            <option value="55-64">option</option>
          </select>
        </div>

        <div className="p-4">
          <p>2. Lorem Ipsum Ha Sido El Texto De Relleno Estándar De Las El Texto De Relleno Estándar De Las?</p>
          <div className="flex flex-row gap-2 sm:gap-12 p-2">
            <label>
              <input type="radio" name="question1" value="option1" />
              Lorem Ipsum
            </label>
            <label>
              <input type="radio" name="question1" value="option2" />
              Lorem Ipsum
            </label>
            <label>
              <input type="radio" name="question1" value="option3" />
              Lorem Ipsum
            </label>
            <label>
              <input type="radio" name="question1" value="option4" />
              Lorem Ipsum
            </label>
          </div>
        </div>

        <div className="text-right mt-8">
          <button className="bg-[#FDC546] text-black font-medium w-40 py-2 px-4 rounded-full">
            Next Step
          </button>
        </div>
      </div>

      {/* Render the popups */}
      <TargetAudiencePopup isVisible={isPopupVisible} onClose={handleClosePopup} />
      <UpdateTargetAudiencePopup isVisible={isEditPopupVisible} onClose={handleCloseEditPopup} />
    </div>
  );
};

export default Targetaudience;
