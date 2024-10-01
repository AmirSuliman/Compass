

const History = ()=>{

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
          
            <div className="mt-6">
              <h1 className="text-lg font-medium mb-4 text-gray-700">Select matrices for content recommendation:</h1>
              <div className="flex flex-col gap-4">
                {/* Matrix options */}
                <div className="flex flex-row gap-2">
                  <input type="radio" name="matrix" className="mr-2" />
                  <label>Getting more organic traffic</label>
                </div>
                <div className="flex flex-row gap-2">
                  <input type="radio" name="matrix" className="mr-2" />
                  <label>Improve click rate</label>
                </div>
                <div className="flex flex-row gap-2">
                  <input type="radio" name="matrix" className="mr-2" />
                  <label>Increase conversions from visits to leads</label>
                </div>
              </div>

              <h1 className="text-lg font-mediun text-gray-700 mt-8 mb-4">Select one of the KPI:</h1>
              <div className="flex flex-col gap-4">
                {/* KPI options */}
                <div className="flex flex-row gap-2">
                  <input type="radio" name="matrix2" className="mr-2" />
                  <label>Number of impressions</label>
                </div>
                <div className="flex flex-row gap-2">
                  <input type="radio" name="matrix2" className="mr-2" />
                  <label>CTR</label>
                </div>
                <div className="flex flex-row gap-2">
                  <input type="radio" name="matrix2" className="mr-2" />
                  <label>Conversion rate</label>
                </div>
              </div>
             
             <h1 className="block text-lg font-medium text-gray-700 mb-1 mt-4"> Selected Audience</h1>
              <div className="mt-4">
               <label className="block text-sm font-medium text-gray-700 mb-2">1. Lorem Ipsum ha sido el texto de relleno estándar de las el texto de relleno estándar de las?</label>
               <select className="block w-[50%] mt-1 p-4 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
                 <option value="" disabled selected>Select an option</option>
                 <option value="audience1">Audience 1</option>
                 <option value="audience2">Audience 2</option>
                 <option value="audience3">Audience 3</option>
                 <option value="audience4">Audience 4</option>
               </select>
             </div>
             <div className="mt-4">
               <label className="block text-sm font-medium text-gray-700 mb-2">2. Lorem Ipsum ha sido el texto de relleno estándar de las el texto de relleno estándar de las Lorem Ipsum ha sido el?</label>
               <div className="flex space-x-6">
                 <label className="inline-flex items-center">
                   <input type="radio" name="option" value="yes" className="form-radio text-blue-600" />
                   <span className="ml-2">Lorem</span>
                 </label>
                 <label className="inline-flex items-center">
                   <input type="radio" name="option" value="no" className="form-radio text-blue-600" />
                   <span className="ml-2">Lorem</span>
                 </label>
                 <label className="inline-flex items-center">
                   <input type="radio" name="option" value="maybe" className="form-radio text-blue-600" />
                   <span className="ml-2">Lorem</span>
                 </label>
                 <label className="inline-flex items-center">
                   <input type="radio" name="option" value="maybe" className="form-radio text-blue-600" />
                   <span className="ml-2">Lorem</span>
                 </label>
               </div>
             </div>
                          
            </div>

         <div className=" border rounded-lg mt-8 sm:w-[700px] w-full">
          <h1 className="text-[24px] font-semibold p-4">Selected  Competitors</h1>   
        
         <table className="bg-white w-full mt-2 py-4">
          <tbody>
            <tr >
              <td>
                <div className="flex flex-row gap-4 items-center justify-between p-3 px-6 w-full ">
                  <div className="flex flex-row items-center gap-3">
                    <img src="/image 19.png" alt="img" className="w-12 h-12 object-cover rounded" />
                    <p className="text-sm text-gray-600">
                      Lorem Ipsum ha sido el texto de relleno estándar de las Lorem
                    </p>
                  </div>
                </div>
              </td>
            </tr>

            <tr >
              <td>
                <div className="flex flex-row gap-4 items-center justify-between p-3 px-6 w-full ">
                  <div className="flex flex-row items-center gap-3">
                    <img src="/image 19.png" alt="img" className="w-12 h-12 object-cover rounded" />
                    <p className="text-sm text-gray-600">
                      Lorem Ipsum ha sido el texto de relleno estándar de las Lorem
                    </p>
                  </div>
                </div>
              </td>
            </tr>
            <tr >
              <td>
                <div className="flex flex-row gap-4 items-center justify-between p-3 px-6 w-full ">
                  <div className="flex flex-row items-center gap-3">
                    <img src="/image 19.png" alt="img" className="w-12 h-12 object-cover rounded" />
                    <p className="text-sm text-gray-600">
                      Lorem Ipsum ha sido el texto de relleno estándar de las Lorem
                    </p>
                  </div>
                </div>
              </td>
            </tr>

          </tbody>
          </table>
         </div>
       
        </>
    )
}
export default History;