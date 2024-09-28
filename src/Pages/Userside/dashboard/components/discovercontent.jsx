import { Ellipsis, ChartNoAxesCombined  } from "lucide-react";

const Discovercontent =()=>{

    return(
       <div className="bg-[#FDC546] p-4 rounded-lg px-8 flex flex-col gap-4">
        <div className="flex flex-row items-start justify-between gap-16">
            <p className="text-[16px]">Discover all the suggestions for your campaigns and start optimization your content</p>
            <Ellipsis size={60}/>
        </div>
        <div className="flex flex-row items-center justify-between gap-16">
            <button className="bg-white rounded-md p-2 px-4">
                View
            </button>
            <ChartNoAxesCombined size={80} color="white"/>
        </div>
       </div>
    )
}
export default Discovercontent;