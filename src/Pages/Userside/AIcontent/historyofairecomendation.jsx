

const HistoryofAirecommendation = ()=>{

    return(
        <>
        <h1 className="font-semibold text-[27px]">History of  AI recommendation on post/content</h1>

           <div className="flex flex-row gap-4 items-center justify-between  mt-8 w-full ">
             <div className="flex flex-row items-center gap-3">
               <img src="/image 19.png" alt="img" className="w-12 h-12 object-cover rounded" />
                 <p className="text-sm text-gray-600">
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quo impedit commodi officiis! Optio ducimus dignissimos reiciendis pariatur dolorum nesciunt veniam doloremque laboriosam? Saepe facilis illum sint ratione nemo excepturi!
                 </p>
             </div>
            </div>

            <div className="mt-8 space-y-2">
                <div className="flex flex-row">
                    <p>Goal:</p>
                    <p className="font-semibold"> Improve Click Rate</p>
                </div>
                <div className="flex flex-row">
                    <p>KPI:</p>
                    <p className="font-semibold"> Impressions</p>
                </div>
                <div className="flex flex-row">
                    <p>Audience:</p>
                    <p className="font-semibold"> Startups</p>
                </div>
                <div className="flex flex-row">
                    <p>Competitors (optional):</p>
                    <p className="font-semibold"> Coca-Cola, Apple and Just Eat</p>
                </div>
            </div>


            <div className=" border border-b-2 mt-8 w-full sm:w-[700px] rounded-lg">
               <h1 className="text-gray-600 font-semibold text-[18px] p-4">recommendation according to select matrices, KPIs, audience and competitors</h1>
                
               <table className="mt-2 w-full table-auto  bg-white   rounded-lg">
                  <tbody>
                    <tr className="text-sm text-gray-700 border-b border-gray-300 ">
                      <td className="p-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, reiciendis impedit! Vitae at nam minima quaerat perferendis dolores quidem, modi voluptas facilis dolorem cumque fugit fuga tempore reiciendis dicta sit!</td>
                    </tr>
                    <tr className="text-sm text-gray-700 border-b border-gray-300">
                      <td className="p-4 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, reiciendis impedit! Vitae at nam minima quaerat perferendis dolores quidem, modi voluptas facilis dolorem cumque fugit fuga tempore reiciendis dicta sit!</td>
                    </tr>
                    <tr className="text-sm text-gray-700">
                      <td className="p-4 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, reiciendis impedit! Vitae at nam minima quaerat perferendis dolores quidem, modi voluptas facilis dolorem cumque fugit fuga tempore reiciendis dicta sit!</td>
                    </tr>
                  </tbody>
             </table>


            </div>
        </>
    )
}
export default HistoryofAirecommendation;