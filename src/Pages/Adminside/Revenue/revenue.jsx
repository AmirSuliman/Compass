import {ChevronDown, DollarSign } from 'lucide-react'
import RevenueChart from './revenuechrt';

const Revenue =()=>{

    return(
        <>
          <div className="bg-white p-4 rounded-lg w-[380px] flex flex-col gap-8">
            <div className="flex flex-row items-center justify-between">
               <p className='font-semibold text-[18px]'>Balance</p>
               <div className="flex flex-row gap-3">
                <div className="p-2 border border-black rounded-lg">
                   <img src="/inr.png" alt="img"/>
                </div>
                <div className="bg-black p-2 rounded-lg">
                <DollarSign className='text-white'/>
                </div>

               </div>
            </div>
             <h1 className='font-semibold text-[30px]'>$ 8,453.00</h1>
          </div>

          <div className='p-4 bg-white rounded-lg mt-8 shadow-md'>
             <div className='flex flex-row items-center justify-between'>
                <p className='text-[#9291A5]'>Statistics</p>
                <button className='flex flex-row bg-white gap-4 p-2 border rounded-lg'>
                    <p>Monthly</p>
                    <ChevronDown/>
                </button>
             </div>
             <h1 className='font-bold text-[21px] mb-8'>Revenue</h1>
              <RevenueChart/>
          </div>
        </>
    )
}
export default Revenue;