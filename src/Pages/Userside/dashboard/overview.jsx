import { ChevronDown, Plus } from "lucide-react";
import DefaultLayout from "../../../Layout/defaultlayout";
import Cards from "./components/cards";
import Contenttable from "./components/contenttable";
import Detailtable from "./components/detailstable";


const Overview=()=>{

    return(
        <DefaultLayout>
            <div className="flex flex-col gap-3 -mt-6">
                <div className="flex flex-col gap-3 sm:flex-row w-full items-center justify-between">
                    <div className="flex flex-row gap-6 items-center justify-center font-semibold">
                        <div className="bg-white rounded-md p-2 px-3">
                        Last 7 Days
                        </div>
                        <p className="text-gray-400">Months</p>
                        <p className="text-gray-400">Years</p>
                    </div>
                    <div className="flex flex-row gap-2">
                    <div className="bg-white rounded-md p-3 flex flex-row gap-3 text-[#555555] font-semibold">
                        <img src="/image 10.png" alt="img" />
                        <p>Instagram</p>
                        <ChevronDown className="ml-3"/>
                    </div>
                    <div className="bg-white rounded-full text-semi-bold p-3 ">
                        <Plus/>
                    </div>
                    </div>                   
                </div>
                <div className="w-full bg-gray-200 h-[1.3px]"/>
            </div>


            <Cards/>
            <div className="flex flex-col sm:flex-row gap-2 items-start justify-between mt-4">
                <Contenttable/>
                <Detailtable/>

            </div>
        </DefaultLayout>
    )
}
export default Overview;