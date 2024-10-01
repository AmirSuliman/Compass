// components/TargetAudiencePopup.js
import React, { useState } from "react";
import { ChevronDown, SquarePlus } from "lucide-react";

const TargetAudiencePopup = ({ isVisible, onClose }) => {
  const [audienceName, setAudienceName] = useState("");
  const [platform, setPlatform] = useState("");
  const [interests, setInterests] = useState([""]);
  const [gains, setGains] = useState([""]);
  const [motivations, setMotivations] = useState([""]);

  const handleAddAudience = () => {
    console.log({
      audienceName,
      platform,
      interests,
      gains,
      motivations,
    });
    onClose(); // Close the popup after adding
  };

  const addInterest = () => setInterests([...interests, ""]);
  const addGain = () => setGains([...gains, ""]);
  const addMotivation = () => setMotivations([...motivations, ""]);

  const handleChange = (setState, index, value) => {
    setState((prev) => prev.map((item, i) => (i === index ? value : item)));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-1/2 overflow-y-auto max-h-[100vh]">
        <h1 className="text-xl font-semibold mb-4">Add Target Audience</h1>

        {/* Enter Audience Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Enter Audience Name</label>
          <input
            type="text"
            value={audienceName}
            onChange={(e) => setAudienceName(e.target.value)}
            className="mt-1 block w-full p-4 border rounded-lg text-sm"
            placeholder="Startup, Bank, etc."
          />
        </div>

        {/* Select Platform */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Select Platform</label>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="mt-1 block w-full p-4 border rounded-lg text-sm"
          >
            <option value="" disabled>Select Platform</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="YouTube">YouTube</option>
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
          </select>
        </div>

        {/* Enter Interests */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Enter Interests</label>
          {interests.map((interest, index) => (
            <input
              key={index}
              value={interest}
              onChange={(e) => handleChange(setInterests, index, e.target.value)}
              className="mt-1 block w-full p-4 border rounded-lg text-sm mb-2"
              placeholder="Enter interests related to the audience"
            />
          ))}
          <div onClick={addInterest} className="text-blue-500 flex flex-row items-center gap-1 mt-2 text-[12px] cursor-pointer">
            <SquarePlus size={16} />
            <p>Add More</p>
          </div>
        </div>

        {/* Enter Gains */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Enter Gains</label>
          {gains.map((gain, index) => (
            <input
              key={index}
              value={gain}
              onChange={(e) => handleChange(setGains, index, e.target.value)}
              className="mt-1 block w-full p-4 border rounded-lg text-sm mb-2"
              placeholder="What does this audience gain?"
            />
          ))}
          <div onClick={addGain} className="text-blue-500 flex flex-row items-center gap-1 mt-2 text-[12px] cursor-pointer">
            <SquarePlus size={16} />
            <p>Add More</p>
          </div>
        </div>

        {/* Enter Motivations */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Enter Motivations</label>
          {motivations.map((motivation, index) => (
            <input
              key={index}
              value={motivation}
              onChange={(e) => handleChange(setMotivations, index, e.target.value)}
              className="mt-1 block w-full p-4 border rounded-lg text-sm mb-2"
              placeholder="What motivates this audience?"
            />
          ))}
          <div onClick={addMotivation} className="text-blue-500 flex flex-row items-center gap-1 mt-2 text-[12px] cursor-pointer">
            <SquarePlus size={16} />
            <p>Add More</p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 text-right">
          <button
            onClick={handleAddAudience}
            className="bg-[#FDC546] text-black font-medium w-40 py-2 px-4 rounded-full"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TargetAudiencePopup;
