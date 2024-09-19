import Leftsidebar from "../components/leftsidebarauth";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NoofpeopleQuestion = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  // Handler for radio button change
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Handler for form submission (Next button)
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    navigate("/role"); // Navigate to the desired route
  };

  // Handler for Back button
  const handleBack = () => {
    navigate(-1); // Navigate to the previous page in history
  };

  return (
    <div className="flex flex-row h-[100vh]">
      {/* Sidebar with fixed width */}
      <div className="w-[45%] hidden sm:flex">
        <Leftsidebar />
      </div>

      {/* Main Content Area */}
      <div className="sm:w-[130vh] bg-[#f8f8f8] flex flex-col items-center justify-center">
        <div className="p-4 max-w-md w-full text-start mt-4">
          <h1 className="text-[25px] font-bold text-gray-800">How many people are going to use this plathform</h1>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 mt-12">
            {/* Radio Button 1 */}
            <div 
              className={`flex flex-row items-center space-x-4 p-4 rounded-full border transition-colors ${selectedOption === 'option1' ? 'bg-yellow-50 border-[#D6A73B]' : 'bg-white border-gray-300'}`}
            >
              <input
                type="radio"
                value="option1"
                name="radio-group"
                onChange={handleChange}
                className={`h-6 w-6 rounded-full border text-[#D6A73B] border-gray-300 peer appearance-none checked:bg-[#D6A73B] checked:border-transparent focus:ring-[#D6A73B]`} 
                required
              />
              <label className={`text-gray-700 ${selectedOption === 'option1' ? 'text-[#D6A73B]' : ''}`}>Just me</label>
            </div>

            {/* Radio Button 2 */}
            <div 
              className={`flex flex-row items-center space-x-4 p-4 border rounded-full transition-colors ${selectedOption === 'option2' ? 'bg-yellow-50 border-[#D6A73B]' : 'bg-white border-gray-300'}`}
            >
              <input
                type="radio"
                value="option2"
                name="radio-group"
                onChange={handleChange}
                className={`h-6 w-6 rounded-full border text-[#D6A73B] border-gray-300 peer appearance-none checked:bg-[#D6A73B] checked:border-transparent focus:ring-[#D6A73B']`} 
              />
              <label className={`text-gray-700 ${selectedOption === 'option2' ? 'text-[#D6A73B]' : ''}`}>Work with more collegues</label>
            </div>

           
            <div className="flex flex-row gap-3 mt-4">
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
                Next
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NoofpeopleQuestion;
