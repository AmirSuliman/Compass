import Leftsidebar from "../components/leftsidebarauth";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DescribeQuestion = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  // Handler for radio button change
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    navigate("/Busniess"); // Navigate to the desired route
  };

  return (
    <div className="flex flex-row h-[100vh]">
      {/* Sidebar with fixed width */}
      <div className="w-[45%] hidden sm:flex">
        <Leftsidebar />
      </div>

      {/* Main Content Area */}
      <div className="sm:w-[130vh] bg-[#f8f8f8] flex flex-col items-center justify-center">
        <div className="p-4 max-w-md w-full text-start mt-8">
          <h1 className="text-[25px] font-bold text-gray-800">What Describes you best?</h1>
          <p className="mb-6 text-[#8D8888]">
            Lorem Ipsum ha sido el texto de relleno estándar de las Lorem Ipsum ha sido el texto de relleno estándar.
          </p>

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
              <label className={`text-gray-700 ${selectedOption === 'option1' ? 'text-[#D6A73B]' : ''}`}>Content Creator, Personal Brands or Influencer</label>
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
              <label className={`text-gray-700 ${selectedOption === 'option2' ? 'text-[#D6A73B]' : ''}`}>Freelancer work for clients</label>
            </div>

            {/* Radio Button 3 */}
            <div 
              className={`flex flex-row items-center space-x-4 p-4 border rounded-full transition-colors ${selectedOption === 'option3' ? 'bg-yellow-50 border-[#D6A73B]' : 'bg-white border-gray-300'}`}
            >
              <input
                type="radio"
                value="option3"
                name="radio-group"
                onChange={handleChange}
                className={`h-6 w-6 rounded-full border text-[#D6A73B] border-gray-300 peer appearance-none checked:bg-[#D6A73B] checked:border-transparent focus:ring-[#D6A73B]`} 
              />
              <label className={`text-gray-700 ${selectedOption === 'option3' ? 'text-[#D6A73B]' : ''}`}>Marketing Agency</label>
            </div>

            <button
              type="submit"
              className="mt-8 flex flex-row py-2 px-6 bg-blue-500 text-white rounded-full hover:bg-blue-600 items-center justify-center"
            >
              Next
              <ChevronRight className="w-6 h-6" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DescribeQuestion;
