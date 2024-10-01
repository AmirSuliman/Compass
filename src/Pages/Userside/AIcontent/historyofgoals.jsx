import React, { useState } from "react";
import { EllipsisVertical } from 'lucide-react';

const Historyofgoalsandkpis = () => {
  const [activeTab, setActiveTab] = useState("GoalAndKPI");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">History of all the goals and KPIs</h1>

      <div className="border-b w-[400px] border-gray-300"> {/* Gray line for overall border */}
        <div className="flex flex-row gap-12">
          <button
            className={`p-2 ${activeTab === "GoalAndKPI" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"}`}
            onClick={() => handleTabClick("GoalAndKPI")}
          >
            GoalAndKPI
          </button>
          <button
            className={`p-2 ${activeTab === "Audience" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"}`}
            onClick={() => handleTabClick("Audience")}
          >
            Audience
          </button>
          <button
            className={`p-2 ${activeTab === "AnotherGoal" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"}`}
            onClick={() => handleTabClick("AnotherGoal")}
          >
            Competitors
          </button>
        </div>
      </div>

      {/* Content can change based on active tab */}
      <div className="mt-4">
        {activeTab === "GoalAndKPI" && 
         <div className="border border  rounded-lg">
            <h1 className="p-4">Objective  pursued </h1>
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
           
                <button className="px-6 p-2 bg-[#FDC546] rounded-full">
                    View
                </button>
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
           
                 <button className="px-6 p-2 bg-[#FDC546] rounded-full">
                    View
                </button>               
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
           
                 <button className="px-6 p-2 bg-[#FDC546] rounded-full">
                    View
                </button>
               </div>
             </td>
           </tr>


                                
          </tbody>
        </table>

        </div>
        }
        {activeTab === "Audience" && <p>Content for Audience</p>}
        {activeTab === "AnotherGoal" && <p>Content for Another Goal</p>}
      </div>
    </>
  );
};

export default Historyofgoalsandkpis;
