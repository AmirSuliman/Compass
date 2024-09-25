const Suggestion = () => {
    return (
      <>
        <h1 className="text-[24px] font-semibold">Give your suggestion</h1>
  
        <div className="bg-white rounded-lg p-4 mt-4 border border-[#BCBCBC] shadow-sm">
          <form>
            <div className="flex flex-col gap-4 p-4">
              <div className="flex flex-row w-full gap-4">
                <label className="block w-1/2">
                  <span className="text-gray-700 ">Enter your First Name</span>
                  <input
                    type="text"
                    className="mt-1 block w-full text-sm text-gray-700 p-4 border rounded-md"
                    placeholder="Frist Name"
                  />
                </label>
                <label className="block w-1/2">
                  <span className="text-gray-700">Enter your Last Name</span>
                  <input
                    type="text"
                    className="mt-1 block w-full text-sm text-gray-700 p-4 border rounded-md"
                    placeholder="Last Name"
                  />
                </label>
              </div>
  
              <label className="block">
                <span className="text-gray-700">Enter Email</span>
                <input
                  type="email"
                  className="mt-1 block w-1/2 text-sm text-gray-700 p-4 border rounded-md"
                  placeholder="johndoe@example.com"
                />
              </label>
  
              <label className="block">
                <span className="text-gray-700">Write your Suggestion</span>
                <textarea
                  className="mt-1 block w-full text-sm text-gray-700 p-4 h-40 border rounded-md"
                  placeholder="Enter your suggestion here..."
                />
              </label>
            </div>
  
            <div className="text-right ">
              <button
                type="submit"
                className="bg-[#FDC546] text-black font-medium px-16 py-2 px-4 rounded-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  };
  
  export default Suggestion;