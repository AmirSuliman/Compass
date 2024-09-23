import { ChevronDown, Plus } from "lucide-react";
import Cards from "./components/cards";
import Contenttable from "./components/contenttable";
import Detailtable from "./components/detailstable";
import CustomLineChart from "../components/follwerschart";
import MapChart from "./components/map";
import GenderStatisticsPieChart from "./components/statisticbygender";
import UsersByDevice from "./components/userbydevice";
import Chart from "./components/profilevisit";

const Overview=()=>{

    return(
        <>
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

            <div className="flex flex-row gap-4 w-full items-center justify-between mt-4">
                <div className="bg-white rounded-md p-4 w-[65%]">
                    <h1 className="text-[#555555] text-[18px] mb-6 font-semibold">Followers</h1>
                   <CustomLineChart/>
                </div>
                <div className="flex-1 bg-white rounded-md p-4 ">
                <h1 className="text-[#555555] text-[18px] mb-6 font-semibold">Map Distrubition</h1>
                <img src="/Map.png" alt="map" className="h-[300px]"/>
                </div>
            </div>

            <div className="flex flex-row gap-6 w-full  items-start justify-between mt-4">
                <div className="bg-white w-full h-[370px] p-4 rounded-md" >
                <h1 className="text-[#555555] text-[18px] mb-6 font-semibold">Statistic By Gender</h1>
                    <GenderStatisticsPieChart/>
                </div>
                <div className="bg-white w-full p-4 h-[370px] rounded-md" >
                <h1 className="text-[#555555] text-[18px] mb-6  font-semibold">Profile Visits</h1>
                    <Chart/>
                </div>
                <div className="bg-white w-full p-4 h-[370px] rounded-md items-center justify-center" >
                <h1 className="text-[#555555] text-[18px] mb-6 font-semibold ">Users By Device</h1>
                    <UsersByDevice/>
                </div>

            </div>
            </>
    )
}
export default Overview;