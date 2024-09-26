import { useNavigate } from "react-router-dom";


const Selectone = () => {
  
  const navigate= useNavigate();
  const handleNavigate = () => {
    navigate('/user/survey'); 
  };
  const handleNavigatesuggestion = () => {
    navigate('/user/suggestion'); 
  };


  return (
    <div className="mt-10">
      <h1 className="font-medium text-2xl">Select One</h1>
      <div className="flex flex-col w-full md:flex-col lg:flex-col xl:flex-col mt-4">
        <div className="flex flex-col w-full md:flex-row lg:flex-row xl:flex-row gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          <div 
          onClick={handleNavigatesuggestion}
          className="cursor-pointer w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-6 flex flex-row p-3 items-center justify-between rounded-full border border-[#000000] bg-[#EBEBEB] text-[#000000]">
            <div className="flex flex-row gap-3">
              <img src="/suggestion.png" alt="fb" />
              <p className="font-medium">Give your suggestion</p>
            </div>
            <img src="/Logo1.png" alt="img" />
          </div>
          <div
          onClick={handleNavigate}
          className="cursor-pointer w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-6 flex flex-row p-3 items-center justify-between rounded-full border border-[#000000] bg-[#EBEBEB] text-[#000000]">
            <div className="flex flex-row gap-3">
              <img src="/survey.png" alt="tk" />
              <p className="font-medium">Fill the Survey</p>
            </div>
            <img src="/Logo1.png" alt="img" />
          </div>
        </div>

        <div className="flex flex-col w-full md:flex-row lg:flex-row xl:flex-row gap-6 md:gap-8 lg:gap-10 xl:gap-12 mt-4 md:mt-6 lg:mt-8 xl:mt-10">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-6 flex flex-row p-3 items-center justify-between rounded-full border border-[#000000] bg-[#EBEBEB] text-[#000000]">
            <div className="flex flex-row gap-3">
              <img src="/feedback.png" alt="fb" />
              <p className="font-medium">Your feedback</p>
            </div>
            <img src="/Logo1.png" alt="img" />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-6 flex flex-row p-3 items-center justify-between rounded-full border border-[#000000] bg-[#EBEBEB] text-[#000000]">
            <div className="flex flex-row gap-3">
              <img src="/comment.png" alt="tk" />
              <p className="font-medium">Comment for Improvements</p>
            </div>
            <img src="/Logo1.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selectone;