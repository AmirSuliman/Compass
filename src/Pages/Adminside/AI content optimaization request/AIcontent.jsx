import StackedBarChart from "./Aicontentchart";
import {ChevronDown, Folder, Moon} from 'lucide-react'
const AIcontent=()=>{

    return(
        <>
        <div className="flex flex-col sm:flex-row gap-4">
            <div className="bg-blue-500 rounded-lg p-4 w-full sm:w-[400px] flex flex-col gap-3 text-white">
                <div className="p-2 bg-blue-400 w-10 rounded-lg text-white"><Folder /></div>
                <p className="mt-6 text-sm">AI content optimization requests</p>
                <div className="flex flex-row items-center justify-between">
                 <p className="text-[20px]">45k</p>
                 <p>+24%</p>
                </div>
            </div>

            <div className="bg-white rounded-lg p-4 w-full sm:w-[400px] flex flex-col gap-3 ">
                <div className="flex flex-row gap-24">
                <div className="p-2 bg-gray-300 w-10 rounded-lg text-blue-500"><Moon /></div>
                <div className="flex flex-row gap-2 text-gray-400">
                    <p>This Week</p>
                    <ChevronDown/>

                </div>
                </div>
                <p className="mt-6 text-sm text-gray-400">AI content optimization requests</p>
                 <p className="text-[20px]">450</p>
            </div>

        </div>
        
        <div className="p-4 bg-white rounded-lg mt-8">
            <div className="flex flex-row items-center justify-between mb-4">
                <p className="text-[18px] font-medium">Summary</p>
                <button className="p-2 rounded-md flex flex-row gap-3">
                    <p>Last7 days</p>
                    <ChevronDown/>
                </button>
            </div>
         <StackedBarChart/>
        </div>
        </>
    )
}
export default AIcontent;