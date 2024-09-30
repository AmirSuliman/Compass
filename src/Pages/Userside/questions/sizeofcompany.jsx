import Leftsidebar from "../components/leftsidebarauth";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sizeofcompany = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    navigate("/connect-tools"); 
  };

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-[45%] hidden sm:flex">
        <Leftsidebar />
      </div>

      <div className="flex-1 bg-[#f8f8f8] flex flex-col items-center justify-center">
        <div className="p-4 max-w-md w-full text-start mt-4">
          <h1 className="text-[25px] font-bold text-gray-800">What is the size of your company?</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6 mt-12">
            <label 
              className={`flex flex-row items-center space-x-4 p-4 rounded-full border transition-colors cursor-pointer ${selectedOption === 'option1' ? 'bg-yellow-50 border-[#D6A73B]' : 'bg-white border-gray-300'}`}
            >
              <input
                type="radio"
                value="option1"
                name="radio-group"
                onChange={handleChange}
                className={`h-6 w-6 rounded-full border text-[#D6A73B] border-gray-300 peer appearance-none checked:bg-[#D6A73B] checked:border-transparent focus:ring-[#D6A73B]`} 
                required
              />
              <span className={`text-gray-700 ${selectedOption === 'option1' ? 'text-[#D6A73B]' : ''}`}>Only me</span>
            </label>

            {/* Radio Button 2 */}
            <label
              className={`flex flex-row items-center space-x-4 p-4 border rounded-full transition-colors cursor-pointer ${selectedOption === 'option2' ? 'bg-yellow-50 border-[#D6A73B]' : 'bg-white border-gray-300'}`}
            >
              <input
                type="radio"
                value="option2"
                name="radio-group"
                onChange={handleChange}
                className={`h-6 w-6 rounded-full border text-[#D6A73B] border-gray-300 peer appearance-none checked:bg-[#D6A73B] checked:border-transparent focus:ring-[#D6A73B']`} 
              />
              <span className={`text-gray-700 ${selectedOption === 'option2' ? 'text-[#D6A73B]' : ''}`}>Between 1 and 10</span>
            </label>

            {/* Radio Button 3 */}
            <label 
              className={`flex flex-row items-center space-x-4 p-4 border rounded-full transition-colors cursor-pointer ${selectedOption === 'option3' ? 'bg-yellow-50 border-[#D6A73B]' : 'bg-white border-gray-300'}`}
            >
              <input
                type="radio"
                value="option3"
                name="radio-group"
                onChange={handleChange}
                className={`h-6 w-6 rounded-full border text-[#D6A73B] border-gray-300 peer appearance-none checked:bg-[#D6A73B] checked:border-transparent focus:ring-[#D6A73B]`} 
              />
              <span className={`text-gray-700 ${selectedOption === 'option3' ? 'text-[#D6A73B]' : ''}`}>Between 11 and 50</span>
            </label>

            {/* Radio Button 4 */}
            <label 
              className={`flex flex-row items-center space-x-4 p-4 border rounded-full transition-colors cursor-pointer ${selectedOption === 'option4' ? 'bg-yellow-50 border-[#D6A73B]' : 'bg-white border-gray-300'}`}
            >
              <input
                type="radio"
                value="option4"
                name="radio-group"
                onChange={handleChange}
                className={`h-6 w-6 rounded-full border text-[#D6A73B] border-gray-300 peer appearance-none checked:bg-[#D6A73B] checked:border-transparent focus:ring-[#D6A73B]`} 
              />
              <span className={`text-gray-700 ${selectedOption === 'option4' ? 'text-[#D6A73B]' : ''}`}>Between 51 and 150</span>
            </label>

            {/* Radio Button 5 */}
            <label 
              className={`flex flex-row items-center space-x-4 p-4 border rounded-full transition-colors cursor-pointer ${selectedOption === 'option5' ? 'bg-yellow-50 border-[#D6A73B]' : 'bg-white border-gray-300'}`}
            >
              <input
                type="radio"
                value="option5"
                name="radio-group"
                onChange={handleChange}
                className={`h-6 w-6 rounded-full border text-[#D6A73B] border-gray-300 peer appearance-none checked:bg-[#D6A73B] checked:border-transparent focus:ring-[#D6A73B]`} 
              />
              <span className={`text-gray-700 ${selectedOption === 'option5' ? 'text-[#D6A73B]' : ''}`}>Between 151 and 500</span>
            </label>

            <label
              className={`flex flex-row items-center space-x-4 p-4 border rounded-full transition-colors cursor-pointer ${selectedOption === 'option6' ? 'bg-yellow-50 border-[#D6A73B]' : 'bg-white border-gray-300'}`}
            >
              <input
                type="radio"
                value="option6"
                name="radio-group"
                onChange={handleChange}
                className={`h-6 w-6 rounded-full border text-[#D6A73B] border-gray-300 peer appearance-none checked:bg-[#D6A73B] checked:border-transparent focus:ring-[#D6A73B]`} 
              />
              <span className={`text-gray-700 ${selectedOption === 'option6' ? 'text-[#D6A73B]' : ''}`}>More than 500</span>
            </label>

            <div className="flex flex-row gap-3 mt-4">
              <button
                type="button" // Changed to type="button" to avoid form submission
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

export default Sizeofcompany;
