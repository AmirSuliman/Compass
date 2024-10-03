import Nav from "./components/nav";
import { useNavigate } from "react-router-dom";
import { Copy } from "lucide-react";
const ViewRecomendation = () => {

    const navigate= useNavigate();
    const handlenavigate=()=>{
        navigate('/user-dashboard');
    }
  return (
    <div>
        <h1 className="text-2xl font-semibold">AI Content Recommendation</h1>
       
         <div className="border border-[#E5E6EA] rounded-md mt-8">
          <h1 className="font-semibold text-[#555555] p-4">Recomendation</h1>

        <table className="bg-white w-full mt-2 py-4">
          <tbody>
           
          <tr className="border-b border-gray-200 p-4">
             <td className="text-sm text-gray-600 p-6 flex flex-row items-center justify-between">
                 Lorem Ipsum ha sido el texto de relleno estándar de las Lorem    
                 <Copy size={18} className="cursor-pointer"/>             
             </td>
           </tr>
           <tr className="border-b border-gray-200 p-4">
           <td className="text-sm text-gray-600 p-6 flex flex-row items-center justify-between">
                 Lorem Ipsum ha sido el texto de relleno estándar de las Lorem    
                 <Copy size={18} className="cursor-pointer"/>             
             </td>
           </tr>
           <tr className="border-b border-gray-200 p-4">
           <td className="text-sm text-gray-600 p-6 flex flex-row items-center justify-between">
                 Lorem Ipsum ha sido el texto de relleno estándar de las Lorem    
                 <Copy size={18} className="cursor-pointer"/>             
             </td>
           </tr>
                   
          </tbody>
        </table>
         
      </div>

      <div className="text-right w-full mb-4 mt-8">
        <button className="px-12 py-2 bg-[#FDC546] rounded-full text-black font-medium"
        onClick={handlenavigate}
        >
          Back to dashboard
        </button>
      </div>

    </div>
  );
};

export default ViewRecomendation;
