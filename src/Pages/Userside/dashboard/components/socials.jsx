import { ChevronsLeft, ChevronsRight } from 'lucide-react';

const Socials = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-between">
      <div className="w-[370px] flex flex-row p-4 items-center justify-between bg-white border border-[#AC2B8333] rounded-full cursor-pointer">
        <div className="flex flex-row gap-3">
          <img src="/image 10.png" alt="img" />
          <p className="text-[#AC2B83] text-[16px] font-medium">Connect to Instagram</p>
        </div>
        <img src="/Layer 2.png" alt="img" />
      </div>

      <div className="w-[370px] flex flex-row p-4 items-center justify-between bg-white border border-[#E6000033] rounded-full cursor-pointer">
        <div className="flex flex-row gap-3">
          <img src="/image 13.png" alt="img" />
          <p className="text-[#E60000] text-[16px] font-medium">Connect to Instagram</p>
        </div>
        <img src="/Layer 2.png" alt="img" />
      </div>

      <div className="w-[370px] flex flex-row p-4 items-center justify-between bg-white border border-[#1D70FA33] rounded-full cursor-pointer">
        <div className="flex flex-row gap-3">
          <img src="/Frame.png" alt="img" />
          <p className="text-[#1D70FA] text-[16px] font-medium">Connect to Instagram</p>
        </div>
        <img src="/Layer 2.png" alt="img" />
      </div>

      <div className="w-[370px] flex flex-row p-4 items-center justify-between bg-white border border-[#1D70FA33] rounded-full cursor-pointer">
        <div className="flex flex-row gap-3">
          <img src="/Frame.png" alt="img" />
          <p className="text-[#1D70FA] text-[16px] font-medium">Connect to Instagram</p>
        </div>
        <img src="/Layer 2.png" alt="img" />
      </div>
      <div className="w-[370px] flex flex-row p-4 items-center justify-between bg-white border border-[#E6000033] rounded-full cursor-pointer">
        <div className="flex flex-row gap-3">
          <img src="/image 13.png" alt="img" />
          <p className="text-[#E60000] text-[16px] font-medium">Connect to Instagram</p>
        </div>
        <img src="/Layer 2.png" alt="img" />
      </div>

      <div className="w-[370px] flex flex-row p-4 items-center justify-between bg-white border border-[#AC2B8333] rounded-full cursor-pointer">
        <div className="flex flex-row gap-3">
          <img src="/image 10.png" alt="img" />
          <p className="text-[#AC2B83] text-[16px] font-medium">Connect to Instagram</p>
        </div>
        <img src="/Layer 2.png" alt="img" />
      </div>

         {/* Centered Pagination */}
         <div className="flex justify-center w-full mt-4">
           <div className="flex flex-row gap-3 items-center justify-center w-fit ">
             <div className="flex flex-row p-3 bg-[#DBDBDB] rounded-full px-5 text-blue-500 cursor-pointer">
               <ChevronsLeft />
               <p>Previous</p>
             </div>
             <div className="flex flex-row gap-4 p-3 bg-[#DBDBDB] rounded-full px-6 text-blue-500 cursor-pointer">
               <p>1</p>
               <p>2</p>
               <p>3</p>
               <p>4</p>
             </div>
             <div className="flex flex-row p-3 bg-[#DBDBDB] rounded-full px-6 text-gray-500 cursor-pointer">
               <p>Next</p>
               <ChevronsRight />
             </div>
           </div>
         </div>

    </div>
  );
};

export default Socials;
