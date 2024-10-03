import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./components/nav";
import { ChevronDown } from "lucide-react";

const Campaigns = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [isThirdOpen, setIsThirdOpen] = useState(false); // New state for the third popup
  const navigate = useNavigate();

  const handlenavigate = () => {
    navigate('/user/ai/view-recomendation');
  };

  const AIrecommendationnavigate = () => {
    navigate('/user/ai/Ai-content-recomendation');
  };

  const handleEllipsisClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsSecondOpen(false);
    setIsThirdOpen(false); // Close all popups
  };

  const handleNextStep = () => {
    setIsOpen(false); // Close first popup
    setIsSecondOpen(true); // Open second popup
  };

  const handleNextToAudience = () => {
    setIsSecondOpen(false); // Close second popup
    setIsThirdOpen(true); // Open third popup (Audience selection)
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-2xl font-semibold">AI Content Recommendation</h1>
        <div className="flex flex-row gap-3">
        <button className="text-black bg-white rounded-lg p-3 text-[14px] flex flex-row items-center gap-3">
            <img src="/image 10.png" alt="img"/>
            Instagram
            <ChevronDown/>
            </button>
            <div className="bg-black text-white p-3 rounded-lg ">7/30</div>
        </div>
          
          
      </div>

      <Nav />

      <div className="border border-[#E5E6EA] rounded-md mt-8">
        <div className="flex flex-row items-center justify-between p-4">
          <h1 className="font-semibold text-[#555555]">Objective Pursued</h1>
          <p className="text-[#555555] cursor-pointer">Apply</p>
        </div>

        <table className="bg-white w-full mt-2 py-4">
          <tbody>
            <tr className="border-b border-gray-200">
              <td>
                <div className="flex flex-row gap-4 items-center justify-between p-3 px-6 w-full hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-row items-center gap-3">
                    <img src="/image 19.png" alt="img" className="w-12 h-12 object-cover rounded" />
                    <p className="text-sm text-gray-600">
                      Lorem Ipsum ha sido el texto de relleno estándar de las Lorem
                    </p>
                  </div>
                  <button className="bg-[#FDC546] rounded-full p-2 px-3 text-[12px]" onClick={handleEllipsisClick} > Create campaign </button>
                </div>
              </td>
            </tr>

            <tr className="border-b border-gray-200">
              <td>
                <div className="flex flex-row gap-4 items-center justify-between p-3 px-6 w-full hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-row items-center gap-3">
                    <img src="/image 19.png" alt="img" className="w-12 h-12 object-cover rounded" />
                    <p className="text-sm text-gray-600">
                      Lorem Ipsum ha sido el texto de relleno estándar de las Lorem
                    </p>
                  </div>
                  <button className="bg-[#FDC546] rounded-full p-2 px-3 text-[12px]" onClick={handleEllipsisClick} > Create campaign </button>
                </div>
              </td>
            </tr>

            <tr className="border-b border-gray-200">
              <td>
                <div className="flex flex-row gap-4 items-center justify-between p-3 px-6 w-full hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-row items-center gap-3">
                    <img src="/image 19.png" alt="img" className="w-12 h-12 object-cover rounded" />
                    <p className="text-sm text-gray-600">
                      Lorem Ipsum ha sido el texto de relleno estándar de las Lorem
                    </p>
                  </div>
                  <button className="bg-[#FDC546] rounded-full p-2 px-3 text-[12px]" onClick={handleEllipsisClick} > Create campaign </button>
                </div>
              </td>
            </tr>

            {/* Repeat similar rows */}
          </tbody>
        </table>
      </div>

      <div className="text-right w-full mb-4 mt-8">
        <button className="px-12 py-2 bg-[#FDC546] rounded-full text-black font-medium"
          //onClick={AIrecommendationnavigate}
          >
          Next step
        </button>
      </div>

      {/* First Popup */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleClose}
        >
          <div
            className="bg-white rounded-md p-4 w-[450px] shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            <form>
              <h1 className="text-lg font-bold mb-4">Select matrices for content recommendation:</h1>
              <div className="flex flex-col gap-4">
                {/* Matrix options */}
                <div className="flex flex-row gap-2">
                  <input type="radio" name="matrix" className="mr-2" />
                  <label>Getting more organic traffic</label>
                </div>
                <div className="flex flex-row gap-2">
                  <input type="radio" name="matrix" className="mr-2" />
                  <label>Improve click rate</label>
                </div>
                <div className="flex flex-row gap-2">
                  <input type="radio" name="matrix" className="mr-2" />
                  <label>Increase conversions from visits to leads</label>
                </div>
              </div>

              <h1 className="text-lg font-bold mt-8 mb-4">Select one of the KPI:</h1>
              <div className="flex flex-col gap-4">
                {/* KPI options */}
                <div className="flex flex-row gap-2">
                  <input type="radio" name="matrix2" className="mr-2" />
                  <label>Number of impressions</label>
                </div>
                <div className="flex flex-row gap-2">
                  <input type="radio" name="matrix2" className="mr-2" />
                  <label>CTR</label>
                </div>
                <div className="flex flex-row gap-2">
                  <input type="radio" name="matrix2" className="mr-2" />
                  <label>Conversion rate</label>
                </div>
              </div>

              <div className="text-right">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-[#FDC546] text-black py-2 px-8 rounded-full mt-8"
                >
                  Next step
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Second Popup */}
      {isSecondOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleClose}
        >
                  <div
                    className="bg-white rounded-md p-4 w-full sm:w-[900px] shadow-md"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="p-4">
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
              <div className="text-right">
                <button
                  className="bg-[#FDC546] text-black py-2 px-8 rounded-full mt-8"
                  onClick={handleNextToAudience}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Third Popup */}
      {isThirdOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleClose}
        >
          <div
            className="bg-white rounded-md p-4 w-[700px] shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Competitor selection logic */}
            <div className="p-4 border rounded-lg">
              <div className="flex flex-row items-center justify-between w-full">
                <h1>Competitor</h1>
                <p>Add</p>
              </div>

              {/* Table of competitors */}
              <table className="bg-white w-full mt-8">
                <tbody>
                  <tr className="flex flex-col sm:flex-row gap-8 items-center justify-between mb-4">
                    <label className="flex flex-row items-center gap-4 w-full">
                      <input type="checkbox" className="mr-4" />
                      <div className="flex flex-row gap-4 w-full justify-between items-center">
                        <div className="flex flex-row gap-4">
                          <img src="/image 19.png" alt="img" />
                          <p className="text-[#8E8E8E] text-[12px]">
                            Lorem Ipsum ha sido el texto de relleno estándar de las...
                          </p>
                        </div>
                        <button className="rounded-full p-3 px-6 border text-[12px] font-medium" onClick={handleClose}>
                          Add Competitor
                        </button>
                      </div>
                    </label>
                  </tr>

                  <tr className="flex flex-col sm:flex-row gap-8 items-center justify-between mb-4">
                    <label className="flex flex-row items-center gap-4 w-full">
                      <input type="checkbox" className="mr-4" />
                      <div className="flex flex-row gap-4 w-full justify-between items-center">
                        <div className="flex flex-row gap-4">
                          <img src="/image 19.png" alt="img" />
                          <p className="text-[#8E8E8E] text-[12px]">
                            Lorem Ipsum ha sido el texto de relleno estándar de las...
                          </p>
                        </div>
                        <button className="rounded-full p-3 px-6 border text-[12px] font-medium">
                          Add Competitor
                        </button>
                      </div>
                    </label>
                  </tr>

                  <tr className="flex flex-col sm:flex-row gap-8 items-center justify-between mb-4">
                    <label className="flex flex-row items-center gap-4 w-full">
                      <input type="checkbox" className="mr-4" />
                      <div className="flex flex-row gap-4 w-full justify-between items-center">
                        <div className="flex flex-row gap-4">
                          <img src="/image 19.png" alt="img" />
                          <p className="text-[#8E8E8E] text-[12px]">
                            Lorem Ipsum ha sido el texto de relleno estándar de las...
                          </p>
                        </div>
                        <button className="rounded-full p-3 px-6 border text-[12px] font-medium">
                          Add Competitor
                        </button>
                      </div>
                    </label>
                  </tr>
                  {/* Repeat rows */}
                </tbody>
              </table>

              <div className="text-right mt-8">
                <button className="px-12 py-2 bg-[#FDC546] rounded-full text-black font-medium"
                  onClick={handlenavigate}>
                  Ask for Recommendation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Campaigns;
