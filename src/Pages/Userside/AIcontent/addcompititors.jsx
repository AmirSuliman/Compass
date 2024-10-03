import { ChevronDown } from "lucide-react";
import Nav from "./components/nav";
import { useNavigate } from "react-router-dom";
const AddCompetitors=()=>{
    const navigate= useNavigate();
    const handleNavigate=()=>{
        navigate('/user/ai/view-recomendation');
    }

    return(
        <div>
        <div className="flex flex-row items-center justify-between">
            <h1 className="text-2xl font-semibold">Add Competitors</h1>
            <div className="flex flex-col sm:flex-row gap-3">
            <div className="bg-white p-3 flex flex-row gap-2 rounded-lg">
                <img src="/image 13.png" alt="img"/>
                <p>Youtube</p>
                <ChevronDown className="ml-4"/>

            </div>
            <div className="text-white bg-black rounded-lg p-3 text-[12px]">
            7/20
            </div>
            </div>
           
        </div>
        
        <Nav/>

        <form className="p-4 rounded-md bg-gray-100 mt-4 w-full ">
            <label className="flex flex-col w-full p-2">
                <span className="mb-1 font-semibold">Name of competitor</span>
                <input type="text " placeholder="Enter name" className="w-full p-4 border rounded-lg bg-transparent"/>
            </label>
            
            <label className="flex flex-col w-full p-2">
                <span className="mb-2 font-semibold">Link to Profile</span>
                <input type="text " placeholder="Enter Link" className="w-full p-4 border rounded-lg bg-transparent"/>
            </label>
           
           <div className="text-right p-4  gap-4">
            <button className="border border-[#FDC546] w-32 p-2 rounded-lg mr-4 text-gray-500">Clear</button>
        <button className="border border-[#FDC546] w-32 p-2 rounded-lg bg-[#FDC546] text-black">Add</button>
           </div>
        </form>

        <div className=" border border-gray-200 mt-6 rounded-lg">
            <div className="flex flex-row items-center justify-between p-4 px-8">
                <h1 className="text-[18px] font-semibold text-[#171717]">Last Competitors used</h1>
                <p className="mr-8">Add</p>
            </div>

            <table className="bg-white p-4 w-full">
                <tbody>
                    <tr className="p-4 flex  flex-col sm:flex-row sm:gap-32 items-center justify-between ">
                        <div className="flex flex-row gap-4">
                            <img src="/image 19.png" alt="img"/>
                            <p className="text-[#8E8E8E] text-[12px]">Lorem Ipsum ha sido el texto de relleno estándar de las Lorem Ipsum ha sido el texto de relleno estándar de las Lorem Ipsum ha sido el texto de relleno estándar de las.........</p>
                        </div>
                        <button className="rounded-full p-3 px-12 border text-[12px] font-medium">AddCompetitor</button>
                    </tr>
                    <tr className="p-4 flex  flex-col sm:flex-row sm:gap-32 items-center justify-between ">
                        <div className="flex flex-row gap-4">
                            <img src="/image 19.png" alt="img"/>
                            <p className="text-[#8E8E8E] text-[12px]">Lorem Ipsum ha sido el texto de relleno estándar de las Lorem Ipsum ha sido el texto de relleno estándar de las Lorem Ipsum ha sido el texto de relleno estándar de las.........</p>
                        </div>
                        <button className="rounded-full p-3 px-12 border text-[12px] font-medium">AddCompetitor</button>
                    </tr>
                    <tr className="p-4 flex  flex-col sm:flex-row sm:gap-32 items-center justify-between ">
                        <div className="flex flex-row gap-4">
                            <img src="/image 19.png" alt="img"/>
                            <p className="text-[#8E8E8E] text-[12px]">Lorem Ipsum ha sido el texto de relleno estándar de las Lorem Ipsum ha sido el texto de relleno estándar de las Lorem Ipsum ha sido el texto de relleno estándar de las.........</p>
                        </div>
                        <button className="rounded-full p-3 px-12 border text-[12px] font-medium">AddCompetitor</button>
                    </tr>
                    <tr className="p-4 flex  flex-col sm:flex-row sm:gap-32 items-center justify-between ">
                        <div className="flex flex-row gap-4">
                            <img src="/image 19.png" alt="img"/>
                            <p className="text-[#8E8E8E] text-[12px]">Lorem Ipsum ha sido el texto de relleno estándar de las Lorem Ipsum ha sido el texto de relleno estándar de las Lorem Ipsum ha sido el texto de relleno estándar de las.........</p>
                        </div>
                        <button className="rounded-full p-3 px-12 border text-[12px] font-medium">AddCompetitor</button>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div className="text-right mt-8 mr-2">
              <button
                type="submit"
                onClick={handleNavigate}
                className="bg-[#FDC546] text-black font-medium px-8 py-2 px-4 rounded-full "
              >
                Ask for recommendations
              </button>
            </div>
    </div>
    )
}

export default AddCompetitors;