const SelectPlatform = () => {
    return (
      <div>
        <h1 className="text-2xl font-medium text-[#1D1D2E]">Select Platform</h1>
        <div className="flex flex-wrap gap-4 mt-6 w-full md:flex-wrap lg:flex-wrap xl:flex-wrap">
          <div className="flex flex-col w-full md:flex-row lg:flex-row xl:flex-row gap-6">
            <div className="w-full px-6 flex flex-row p-3 items-center justify-between rounded-full border border-[#0866FF] bg-[#CDE1FE] text-[#0866FF]">
              <div className="flex flex-row gap-3">
                <img src="/image 9.png" alt="fb" />
                <p className="font-medium">Facebook</p>
              </div>
              <img src="/Logo1.png" alt="img" />
            </div>
            <div className="w-full px-6 flex flex-row p-3 items-center justify-between rounded-full border border-[#000000] bg-[#EBEBEB] text-[#000000]">
              <div className="flex flex-row gap-3">
                <img src="/image 12.png" alt="tk" />
                <p className="font-medium">Tiktok</p>
              </div>
              <img src="/Logo1.png" alt="img" />
            </div>
          </div>
          <div className="flex flex-col w-full md:flex-row lg:flex-row xl:flex-row gap-8">
            <div className="w-full px-6 flex flex-row p-3 items-center justify-between rounded-full border border-[#EED5E6] bg-white text-[#FF5208]">
              <div className="flex flex-row gap-3">
                <img src="/image 10.png" alt="ig" />
                <p className="font-medium">Instagram</p>
              </div>
              <img src="/Logo1.png" alt="img" />
            </div>
            <div className="w-full px-6 flex flex-row p-3 items-center justify-between rounded-full border border-[#FF5208] bg-[#FDC54652] text-[#FF5208]">
              <div className="flex flex-row gap-3">
                <img src="/substack 1.png" alt="li" />
                <p className="font-medium">Subtack</p>
              </div>
              <img src="/Logo1.png" alt="img" />
            </div>
          </div>
  
          <div className="flex flex-col w-full sm:w-1/2 md:flex-row lg:flex-row xl:flex-row gap-8">
            <div className="w-full px-6 flex flex-row p-3 items-center justify-between rounded-full border border-[#FF5208] bg-[#F2D0D0] text-[#FF5208]">
              <div className="flex flex-row gap-3">
                <img src="/image 13.png" alt="ig" />
                <p className="font-medium">Youtube</p>
              </div>
              <img src="/Logo1.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SelectPlatform;