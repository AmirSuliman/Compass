import Chart from "./components/chart";
import Nav from "./components/nav";
import { Files, SquareArrowOutUpRight, EllipsisVertical } from 'lucide-react';

const AIcontentrecomendation = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-2xl font-semibold">AI Content Recommendation</h1>
        <div className="text-white bg-black rounded-lg p-3 text-[12px]">
          Total Number of Recommendations Used
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
                   <div className="flex flex-col">
                     <p className="text-sm text-gray-600">
                       Lorem Ipsum ha sido el texto de relleno estándar de las Lorem 
                     </p>
                     <div className="flex flex-row gap-6 mt-2">
                       {/* Copy Icon and Label */}
                       <div className="flex flex-row gap-2 items-center cursor-pointer">
                         <Files size={16} className="text-gray-400" />
                         <p className="text-[12px] text-gray-500">Copy</p>
                       </div>
           
                       {/* Share Icon and Label */}
                       <div className="flex flex-row gap-2 items-center cursor-pointer">
                         <SquareArrowOutUpRight size={16} className="text-gray-400" />
                         <p className="text-[12px] text-gray-500">Share</p>
                       </div>
                     </div>
                   </div>
                 </div>
           
                 <EllipsisVertical />
               </div>
             </td>
           </tr>


           <tr className="border-b border-gray-200">
             <td>
               <div className="flex flex-row gap-4 items-center justify-between p-3 px-6 w-full hover:shadow-md transition-shadow duration-300">
                 <div className="flex flex-row items-center gap-3">
                   <img src="/image 19.png" alt="img" className="w-12 h-12 object-cover rounded" />
                   <div className="flex flex-col">
                     <p className="text-sm text-gray-600">
                       Lorem Ipsum ha sido el texto de relleno estándar de las Lorem 
                     </p>
                     <div className="flex flex-row gap-6 mt-2">
                       {/* Copy Icon and Label */}
                       <div className="flex flex-row gap-2 items-center cursor-pointer">
                         <Files size={16} className="text-gray-400" />
                         <p className="text-[12px] text-gray-500">Copy</p>
                       </div>
           
                       {/* Share Icon and Label */}
                       <div className="flex flex-row gap-2 items-center cursor-pointer">
                         <SquareArrowOutUpRight size={16} className="text-gray-400" />
                         <p className="text-[12px] text-gray-500">Share</p>
                       </div>
                     </div>
                   </div>
                 </div>
           
                 <EllipsisVertical />
               </div>
             </td>
           </tr>


           <tr className="border-b border-gray-200">
             <td>
               <div className="flex flex-row gap-4 items-center justify-between p-3 px-6 w-full hover:shadow-md transition-shadow duration-300">
                 <div className="flex flex-row items-center gap-3">
                   <img src="/image 19.png" alt="img" className="w-12 h-12 object-cover rounded" />
                   <div className="flex flex-col">
                     <p className="text-sm text-gray-600">
                     Lorem Ipsum ha sido el texto de relleno estándar de las Lorem Ipsum ha sido el texto de relleno estándar de las Lorem Ipsum ha sido el texto de relleno estándar de las Lorem Ipsum ha sido el texto de relleno estándar de las ......... 
                     </p>
                     <div className="flex flex-row gap-6 mt-2">
                       {/* Copy Icon and Label */}
                       <div className="flex flex-row gap-2 items-center cursor-pointer">
                         <Files size={16} className="text-gray-400" />
                         <p className="text-[12px] text-gray-500">Copy</p>
                       </div>
           
                       {/* Share Icon and Label */}
                       <div className="flex flex-row gap-2 items-center cursor-pointer">
                         <SquareArrowOutUpRight size={16} className="text-gray-400" />
                         <p className="text-[12px] text-gray-500">Share</p>
                       </div>
                     </div>
                   </div>
                 </div>
           
                 <EllipsisVertical />
               </div>
             </td>
           </tr>

                      
          </tbody>
        </table>
         
      </div>

      <div className="flex flex-col sm:flex-row items-end justify-between p-2 sm:p-6 w-full mb-4">
            <div className="bg-white p-4 rounded-lg px-8">
            <h1 className="text-[18px] font-semibold text-[#555555]">Requests</h1>
            <Chart/>
            </div>
            <button className="flex px-12 p-2 bg-[#FDC546] rounded-full text-black font-medium">Next step</button>

          </div>
    </div>
  );
};

export default AIcontentrecomendation;
