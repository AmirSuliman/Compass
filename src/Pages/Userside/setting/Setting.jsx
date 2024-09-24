import React from 'react';

const Setting = () => {
  return (
    <div>
      <h1 className="font-semibold text-2xl">Settings</h1>
      <p className="text-sm text-[#6B7280]">Lorum ipsum lorum ipsum Lorum ipsum lorum ipsum Lorum ipsum lorum ipsum Lorum ipsum lorum ipsum</p>

      <div className="bg-white p-2 sm:p-8 rounded-md mt-6">
        <table className="w-full ">
        <tbody>
           <tr className="border-b border-gray-200">
            <div className='flex flex-col gap-1 p-4'>
                <h1 className='font-semibold text-[16px]'>Two-factor Authentication</h1>
                <p className='text-[#A2A1A8] text-sm'>Keep your account secure by enabling 2FA via mail</p>
            </div> 
           </tr>
         
           <tr className="border-b border-gray-200"> 
            <div className='flex flex-row p-4 items-center justify-between'>
              <div className='flex flex-col gap-1 '>
                <h1 className='font-semibold text-[16px]'>Mobile Push Notifications</h1>
                <p className='text-[#A2A1A8] text-sm'>Receive push notification</p>
               </div> 
               <button className='bg-blue-600  p-1 rounded-full flex justify-end'>
                 <div className='bg-white p-2 rounded-full ml-6'/>
               </button>
            </div>
           </tr>

           <tr className="border-b border-gray-200"> 
            <div className='flex flex-row p-4 items-center justify-between'>
              <div className='flex flex-col gap-1 '>
                <h1 className='font-semibold text-[16px]'>Desktop Notification</h1>
                <p className='text-[#A2A1A8] text-sm'>Receive push notification  in desktop</p>
               </div> 
               <button className='bg-blue-600  p-1 rounded-full flex justify-end'>
                 <div className='bg-white p-2 rounded-full ml-6'/>
               </button>
            </div>
           </tr>

           <tr className="border-b border-gray-200"> 
            <div className='flex flex-row p-4 items-center justify-between'>
              <div className='flex flex-col gap-1 '>
                <h1 className='font-semibold text-[16px]'>Email Notifications</h1>
                <p className='text-[#A2A1A8] text-sm'>Receive email notification</p>
               </div> 
               <button className='bg-blue-600  p-1 rounded-full flex justify-end'>
                 <div className='bg-white p-2 rounded-full ml-6'/>
               </button>
            </div>
           </tr>
         </tbody>
        </table>
      </div>
    </div>
  );
};

export default Setting;