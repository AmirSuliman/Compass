import { useState } from 'react';
import { ArrowDown, ArrowLeftRight, Youtube , ChevronDown} from "lucide-react";
import CompetitorsTable from "./competitorstable";

const Competitors = () => {
  // State to manage modal visibility and competitor input
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [competitorName, setCompetitorName] = useState('');

  // Function to handle modal open and close
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to handle the input change
  const handleInputChange = (e) => {
    setCompetitorName(e.target.value);
  };

  // Function to handle clearing the input
  const handleClear = () => {
    setCompetitorName('');
  };

  // Function to handle adding competitor (you can implement your own logic here)
  const handleAddCompetitor = () => {
    // Logic to add competitor can go here
    console.log("Competitor Added:", competitorName);
    setCompetitorName('');
    setIsModalOpen(false); // Close the modal after adding
  };

  return (
    <>
      <div className='flex justify-between md:items-center gap-4 md:gap-0 flex-col md:flex-row py-2 md:px-8 mt-4'>
        <div className='text-xl font-bold'>List of Competitors</div>
        <div className='flex items-center justify-between md:gap-4'>
          <div className='text-sm gap-2 flex items-center px-4 py-2 rounded-lg justify-center bg-white'>
            <Youtube size={16} />
            Youtube
            <ArrowDown size={14} />
          </div>
          <div className='flex items-center justify-center text-xs px-4 py-2 gap-2 border border-blue-500 rounded-full'>
            <ArrowLeftRight size={14} />
            Compare
          </div>
          <button
            className='text-xs text-nowrap bg-blue-500 text-white px-4 py-2 rounded-full'
            onClick={toggleModal}
          >
            Add Competitor
          </button>
        </div>
      </div>

      <div className='bg-white rounded-md py-2 px-4 md:py-4 md:px-8 mt-4 w-full overflow-auto'>
        <CompetitorsTable />
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#F8F8F8] rounded-lg p-6 w-[90%] md:w-[700px]">
            <div className='flex flex-row items-center justify-between mb-3'>
            <h2 className="text-lg font-semibold mb-4">Add Competitor</h2>
             <button className='bg-white p-3  rounded-md flex flex-row gap-3'>
              <img src='/image 13.png' alt='img'/>
              <p>Youtube</p>
              <ChevronDown className='ml-3'/>
             </button>
            </div>
            <label>
              <span className='font-medium mb-4'>Add Username</span>
            <input
              type="text"
              placeholder="Username"
              value={competitorName}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            />
            </label>
            
            <div className=" text-right gap-4">
              <button
                onClick={handleClear}
                className="flex-1 border border-blue-500 text-gray-700 py-2 w-24 rounded-lg mr-3"
              >
                Clear
              </button>
              <button
                onClick={handleAddCompetitor}
                className="flex-1 bg-blue-500 text-white py-2.5 w-24 rounded-lg"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Competitors;
