import DefaultLayout from "../../../Layout/defaultlayout";
import {CalendarDays, Filter} from 'lucide-react'
import Statisticscard from "./components/dashboardstatistics";

const Userdashboard=()=>{

    return(
        <DefaultLayout>
            <div className="flex flex-row gap-4 items-center justify-between w-full">
                <div className="flex flex-col w-[65%]">
                    <div className="flex flex-row items-center justify-between w-full">
                        <h1 className="text-[27px] text-[#1D1D2E] font-semibold">Marketing Campaign</h1>
                        <div className="flex flex-row gap-2">
                            <button className="bg-white rounded-lg p-3 flex flex-row gap-2 border">
                            <CalendarDays />
                            <p className="font-medium text-[#272727]">1 Jan _ 31 Jan 2024</p>
                            </button>
                            <button className="bg-white rounded-lg p-3 flex flex-row gap-2 border">
                            <Filter />
                            <p className="font-medium text-[#272727]">filter</p>
                            </button>
                        </div>
                    </div>
                   <Statisticscard/>
                </div>

            </div>
        </DefaultLayout>
    )
}
export default Userdashboard;