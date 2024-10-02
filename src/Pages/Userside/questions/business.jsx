import Leftsidebar from "../components/leftsidebarauth";
import { ChevronRight, ChevronLeft, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BusinessQuestion = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    navigate("/people"); 
  };

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-[42%] hidden sm:flex">
        <Leftsidebar />
      </div>

      <div className="flex-1 bg-[#f8f8f8] flex flex-col items-center justify-center">
        <div className="p-4 max-w-md w-full text-start mt-4">
          <h1 className="text-[25px] font-bold text-gray-800">Which kind of business do you work?</h1>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 mt-12">
            {/* Radio Button 1 */}
            <label 
              className={`flex flex-row items-center space-x-4 p-4 border rounded-full transition-colors cursor-pointer ${selectedOption === 'option1' ? 'bg-yellow-50 border-[#D6A73B]' : 'bg-white border-gray-300'}`}
            >
              <input
                type="radio"
                value="option1"
                name="radio-group"
                onChange={handleChange}
                className={`h-6 w-6 rounded-full border text-[#D6A73B] border-gray-300 peer appearance-none checked:bg-[#D6A73B] checked:border-transparent focus:ring-[#D6A73B]`} 
                required
              />
              <span className={`text-gray-700 ${selectedOption === 'option1' ? 'text-[#D6A73B]' : ''}`}>E-Commerce</span>
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
                className={`h-6 w-6 rounded-full border text-[#D6A73B] border-gray-300 peer appearance-none checked:bg-[#D6A73B] checked:border-transparent focus:ring-[#D6A73B]`} 
              />
              <span className={`text-gray-700 ${selectedOption === 'option2' ? 'text-[#D6A73B]' : ''}`}>SaaS</span>
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
              <span className={`text-gray-700 ${selectedOption === 'option3' ? 'text-[#D6A73B]' : ''}`}>Media</span>
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
              <span className={`text-gray-700 ${selectedOption === 'option4' ? 'text-[#D6A73B]' : ''}`}>Marketing</span>
            </label>

            {/* Radio Button 5 */}
            <label 
              className={`flex flex-row items-center justify-between space-x-4 p-4 border rounded-full transition-colors cursor-pointer ${selectedOption === 'option5' ? 'bg-yellow-50 border-[#D6A73B]' : 'bg-white border-gray-300'}`}
            >
              <div className="flex flex-row gap-3">
                <input
                  type="radio"
                  value="option5"
                  name="radio-group"
                  onChange={handleChange}
                  className={`h-6 w-6 rounded-full border text-[#D6A73B] border-gray-300 peer appearance-none checked:bg-[#D6A73B] checked:border-transparent focus:ring-[#D6A73B]`} 
                />
                <span className={`text-gray-700 ${selectedOption === 'option5' ? 'text-[#D6A73B]' : ''}`}>Other</span>
              </div>
              <ChevronDown />
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

export default BusinessQuestion;
