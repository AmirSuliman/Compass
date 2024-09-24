import {Lock} from 'lucide-react'

const Notification =()=>{

    return(
        <div>
      <h1 className="font-semibold text-2xl">Notifications</h1>
      <p className="text-sm text-[#6B7280]">Lorum ipsum lorum ipsum Lorum ipsum lorum ipsum Lorum ipsum lorum ipsum Lorum ipsum lorum ipsum</p>

      <div className="bg-white p-1 sm:p-6 rounded-md mt-6">
        <table className="w-full ">
        <tbody>
           <tr className="border-b border-gray-200">
           <div className='flex flex-row p-4 items-center justify-between'>
            <div className="flex flex-row gap-3">
                <img src="/dp.png" alt="dp" className="w-12 h-12"/>
            <div className='flex flex-col gap-1 '>
                <h1 className='font-semibold text-[16px]'>John deo </h1>
                <p className='text-[#A2A1A8] text-sm'>@Alexa has Purchased for new plan</p>
               </div> 
            </div>
             
               <p className="text-gray-400">Just now</p>
            </div>
           </tr>
         
           <tr className="border-b border-gray-200"> 
            <div className='flex flex-row p-4 items-center justify-between'>
                <div className="flex flex-row gap-3">
                <img src="/dp.png" alt="dp"className="w-12 h-12"/>
                <div className='flex flex-col gap-1 '>
                <h1 className='font-semibold text-[16px]'>John deo </h1>
                <p className='text-[#A2A1A8] text-sm'>@Alexa has Purchased for new plan</p>
               </div> 
                </div>
                <p className="text-gray-400">09:00 AM</p>
            </div>
           </tr>

           <tr className="border-b border-gray-200"> 
            <div className='flex flex-row p-4 items-center justify-between'>
                <div className="flex flex-row gap-3">
                <img src="/dp.png" alt="dp" className="w-12 h-12"/>
                <div className='flex flex-col gap-1 '>
                <h1 className='font-semibold text-[16px]'>Need approval for “New plan” </h1>
                <p className='text-[#A2A1A8] text-sm'>@shane Watson has Purchased for new plan</p>
               </div> 
                </div>
             
               <p className="text-gray-400">11:16 AM</p>

            </div>
           </tr>

           <tr className="border-b border-gray-200"> 
            <div className='flex flex-row p-4 items-center justify-between'>
            <div className="flex flex-row gap-3">
                <div className="p-3 bg-gray-200 rounded-full ">
                <Lock className='text-blue-700'/>
                </div>
                 <div className='flex flex-col gap-1 '>
                     <h1 className='font-semibold text-[16px]'>Password Update successfully</h1>
                     <p className='text-[#A2A1A8] text-sm'>Your password has been updated successfully</p>
                 </div>
            </div>
              
               <p className="text-gray-400">Yesterday</p>

            </div>
           </tr>
         </tbody>
        </table>
      </div>
    </div>
    )
}

export default Notification;