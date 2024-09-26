

const Otp=()=>{

    return(
        <div>
        <h1 className="font-semibold text-2xl">Verify email and phone number</h1>
        <p className="text-sm text-[#6B7280]">Lorum ipsum lorum ipsum Lorum ipsum lorum ipsum Lorum ipsum lorum ipsum Lorum ipsum lorum ipsum</p>
 
         <div className="bg-white p-8 mt-8 rounded-md ">
            <form className="space-y-6 p-6">
            <label className="flex flex-col gap-2">
                <span className="font-medium">Enter OTP sent to example@email.com </span>
                <input 
                 type="text"
                 placeholder="***********"
                 className="w-1/3 border border-gray-300 rounded-md p-3 bg-gray-200"
                />
            </label>

            <label className="flex flex-col gap-2 ">
                <span className="font-medium">Enter OTP sent to +915829584760 </span>
                <input 
                 type="text"
                 placeholder="***********"
                 className="w-1/3 border border-gray-300 rounded-md p-3 bg-gray-200"
                />
            </label>
             
             <button className="p-2 px-12  bg-blue-600 rounded-full text-white">
                submit
             </button>

            </form>
         </div>
       </div>  
    )
}
export default Otp;