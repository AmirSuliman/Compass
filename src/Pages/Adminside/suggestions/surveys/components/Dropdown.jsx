import React, { useState } from 'react';
import { ChevronDown, Instagram, Facebook } from 'lucide-react'; // Import Instagram and Facebook icons

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Options'); // Default placeholder

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option); // Update the selected option
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative w-48">
      {/* Dropdown input-like button */}
      <div
        onClick={toggleDropdown}
        className="flex justify-between items-center px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400"
      >
        <span>{selectedOption}</span> {/* Display the selected option */}
        <ChevronDown size={18} />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <ul className="py-2">
            <li
              onClick={() => handleOptionSelect('Instagram')}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2"
            >
              <Instagram size={18} className="text-pink-500" />
              <span>Instagram</span>
            </li>
            <li
              onClick={() => handleOptionSelect('Facebook')}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2"
            >
              <Facebook size={18} className="text-blue-700" />
              <span>Facebook</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
