import {MoveUpRight} from 'lucide-react'
import GaugeChart from './allmailschart';
import SocialGaugeChart from './socialmedia';
import WebsiteGaugeChart from './allwebsites';

const Statisticscard =()=>{

    return(
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between mt-6">
         <div className="bg-[#F8F5F5] shadow-md p-4 rounded-lg w-full">
            <GaugeChart/>
            <div className="bg-white rounded-md  p-2 space-y-1">
                <p className='text-[#272727] font-medium text-sm'>Received Mails</p>
                <h1 className='font-bold text-[16px]'>2,218</h1>
                <div className="flex flex-row items-center justify-between text-[10px]">
                   <p className='text-[#838181] '>Compared from last week</p>
                   <div className='flex flex-row gap-1 px-3 text-[#00AF50] bg-[#D9F3E6] rounded-full p-1 items-center justify-center'>
                   <MoveUpRight size={10}/>
                   3.5%
                   </div>
                </div>

            </div>
         </div>

         <div className="bg-[#F8F5F5] shadow-md p-4 rounded-lg w-full">
            <SocialGaugeChart/>
            <div className="bg-white rounded-md  p-2 space-y-1">
                <p className='text-[#272727] font-medium text-sm'>Account Reached</p>
                <h1 className='font-bold text-[16px]'>2,218</h1>
                <div className="flex flex-row items-center justify-between text-[10px]">
                   <p className='text-[#838181] '>Compared from last week</p>
                   <div className='flex flex-row gap-1 px-3 text-[#00AF50] bg-[#D9F3E6] rounded-full p-1 items-center justify-center'>
                   <MoveUpRight size={10}/>
                   3.5%
                   </div>
                </div>

            </div>
         </div>

         <div className="bg-[#F8F5F5] shadow-md p-4 rounded-lg w-full">
            <WebsiteGaugeChart/>
            <div className="bg-white rounded-md  p-2 space-y-1">
                <p className='text-[#272727] font-medium text-sm'>Engagment</p>
                <h1 className='font-bold text-[16px]'>2,218</h1>
                <div className="flex flex-row items-center justify-between text-[10px]">
                   <p className='text-[#838181] '>Compared from last week</p>
                   <div className='flex flex-row gap-1 px-3 text-[#00AF50] bg-[#D9F3E6] rounded-full p-1 items-center justify-center'>
                   <MoveUpRight size={10}/>
                   3.5%
                   </div>
                </div>

            </div>
         </div>

        

        
        </div>
    )
}
export default Statisticscard;