import {ArrowUp, ArrowDown, ChevronDown } from 'lucide-react'
import MultiLineChart from './campaignschart';

const Campaigns =()=>{

    return(
        <>
          <div className="flex flex-col sm:flex-row gap-8 items-center justify-between w-full">
            <div className="p-4 rounded-lg bg-white w-full shadow-md flex flex-col gap-4">
               <p className='text-[18px] font-medium'>Active users</p>
               <div className="flex flex-row items-center justify-between">
                <p className='font-semibold text-[36px]'>6M</p>
                <div className="p-1 bg-[#ECFDF3] text-[#32D583] flex flex-row gap-2 rounded-lg">
                <ArrowUp />
                <p>26%</p>
                </div>
               </div>
            </div>

            <div className="p-4 rounded-lg bg-white w-full shadow-md flex flex-col gap-4">
               <p className='text-[18px] font-medium'>Active Campaigns</p>
               <div className="flex flex-row items-center justify-between">
                <p className='font-semibold text-[36px]'>6M</p>
                <div className="p-1 bg-[#FFEAE8] text-[#FF675B] flex flex-row gap-2 rounded-lg">
                <ArrowDown />
                <p>26%</p>
                </div>
               </div>
            </div>

            <div className="p-4 rounded-lg bg-white w-full shadow-md flex flex-col gap-4">
               <p className='text-[18px] font-medium'>In active Campaigns</p>
               <div className="flex flex-row items-center justify-between">
                <p className='font-semibold text-[36px]'>6M</p>
                <div className="p-1 bg-[#FFEAE8] text-[#FF675B] flex flex-row gap-2 rounded-lg">
                <ArrowDown />
                <p>4%</p>
                </div>
               </div>
            </div>
          
          </div>


          <div className='p-4 px-2 sm:px-6 bg-white rounded-lg mt-8 shadow-md'>
            <div className='flex flex-col sm:flex-row  justify-between mb-8'>
                <p className='text-[#1E3F64] font-semibold text-[24px]'>Campaigns</p>
                <div className='flex flex-col sm:flex-row gap-8'>
                    <div className='flex flex-row gap-2 sm:gap-6 '>
                        <div className='flex flex-row gap-2 items-center'>
                          <div className='bg-[#00AF50] w-4 h-4 rounded-full'/>
                          <p className='text-[#979699] text-sm'>Total Campaigns</p>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                          <div className='bg-[#FDC546] w-4 h-4 rounded-full'/>
                          <p className='text-[#979699] text-sm'>Total Campaigns</p>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                          <div className='bg-[#3180F5] w-4 h-4 rounded-full'/>
                          <p className='text-[#979699] text-sm'>Total Campaigns</p>
                        </div>
                    </div>
                    <button className='bg-white p-3 items-center rounded-lg flex flex-row gap-4 shadow-md w-24'>
                        <p>Yearly</p>
                        <ChevronDown/>
                    </button>

                </div>
            </div>
             
             <MultiLineChart/>
          </div>
        </>
    )
}

export default Campaigns;