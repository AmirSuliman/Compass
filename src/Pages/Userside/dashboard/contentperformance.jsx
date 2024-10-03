import { ChevronDown, ChevronUp, CloudDownload, Search } from 'lucide-react';


const Contentperformance =()=>{

    return(
        <div className="w-full border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800">
      {/* Header Section */}
      <div className="w-full flex flex-row items-center justify-between p-4">
        <h2 className="text-[#555555] dark:text-gray-100 font-medium text-[18px]">Details</h2>

        {/* Actions (Download CSV and Search) */}
        <div className="flex flex-row gap-2 text-[10px] items-center">
          {/* Download CSV Button */}
          <div className="flex flex-row gap-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-full px-4 cursor-pointer items-center justify-center">
            <CloudDownload size={16} />
            <p className="text-gray-700 dark:text-gray-300">Download CSV</p>
          </div>

          {/* Search Box */}
          <div className="flex flex-row items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-full p-2 px-4 text-gray-400">
            <input
              type="search"
              placeholder="Search..."
              className="bg-gray-100 dark:bg-gray-700 outline-none text-gray-600 dark:text-gray-300 text-sm hidden lg:flex"
            />
            <Search size={16} />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto sm:px-6">
        <table className="min-w-full table-auto border-collapse px-4 items-center justify-center mt-4">
          {/* Table Head */}
          <thead>
            <tr className="text-left text-gray-500 dark:text-gray-300 text-sm font-medium px-6 items-center justify-center">
              <th className="px-6 py-3 border-b dark:border-gray-600">Name</th>
              <th className="px-6 py-3 border-b dark:border-gray-600">
                <div className='flex flex-row gap-1 items-center justify-center'>
                    <div className='flex flex-col '>
                        <ChevronUp size={18} className='cursor-pointer'/>
                        <ChevronDown size={18} className='-mt-2 cursor-pointer'/>

                    </div>
                Date   
                </div>
                </th>
              <th className="px-6 py-3 border-b dark:border-gray-600">
              <div className='flex flex-row gap-1 items-center justify-center'>
                    <div className='flex flex-col '>
                        <ChevronUp size={18} className='cursor-pointer'/>
                        <ChevronDown size={18} className='-mt-2 cursor-pointer'/>

                    </div>
                  Open Rate 
                </div>
              </th>
              <th className="px-6 py-3 border-b dark:border-gray-600">
              <div className='flex flex-row gap-1 items-center justify-center'>
                    <div className='flex flex-col '>
                        <ChevronUp size={18} className='cursor-pointer'/>
                        <ChevronDown size={18} className='-mt-2 cursor-pointer'/>

                    </div>
                   CTR 
                </div>
              </th>
              <th className="px-6 py-3 border-b dark:border-gray-600">
              <div className='flex flex-row gap-1 items-center justify-center'>
                    <div className='flex flex-col '>
                        <ChevronUp size={18} className='cursor-pointer'/>
                        <ChevronDown size={18} className='-mt-2 cursor-pointer'/>

                    </div>
                  Subscribers   
                </div>
              </th>
              <th className="px-6 py-3 border-b dark:border-gray-600">AI Recommendation</th>

            </tr>
          </thead>

          {/* Table Body */}
          <tbody className='items-center justify-center'>
            {/* First Row */}
            <tr className="text-sm text-gray-600 dark:text-gray-200">
              <td className="px-4 py-4 border-b dark:border-gray-600">
                <div className="flex flex-row gap-2 px-2 sm:px-0 sm:gap-5 items-center">
                  <img src="/image 19.png" alt="img" className="w-10 h-10 rounded" />
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      Lorem Ipsum ha sido el texto de relleno estándar de las...
                    </p>
                   
                </div>
              </td>
              <td className="px-6 py-4 border-b dark:border-gray-600">24/May/2024</td>
              <td className="px-6 py-4 border-b dark:border-gray-600">28k</td>
              <td className="px-6 py-4 border-b dark:border-gray-600">28k</td>
              <td className="px-6 py-4 border-b dark:border-gray-600">28k</td>
              <td className="px-6 py-4 border-b dark:border-gray-600 ">
                <button className='bg-[#FDC546] rounded-full p-2 text-[12px] text-black font-medium'>Request a content optimization</button>
              </td>
            </tr>

            <tr className="text-sm text-gray-600 dark:text-gray-200">
              <td className="px-4 py-4 border-b dark:border-gray-600">
                <div className="flex flex-row gap-2 px-2 sm:px-0 sm:gap-5 items-center">
                  <img src="/image 19.png" alt="img" className="w-10 h-10 rounded" />
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      Lorem Ipsum ha sido el texto de relleno estándar de las...
                    </p>
                   
                </div>
              </td>
              <td className="px-6 py-4 border-b dark:border-gray-600">24/May/2024</td>
              <td className="px-6 py-4 border-b dark:border-gray-600">28k</td>
              <td className="px-6 py-4 border-b dark:border-gray-600">28k</td>
              <td className="px-6 py-4 border-b dark:border-gray-600">28k</td>
              <td className="px-6 py-4 border-b dark:border-gray-600 ">
                <button className='bg-[#FDC546] rounded-full p-2  text-[12px] text-black font-medium'>Request a content optimization</button>
              </td>

            </tr>

            <tr className="text-sm text-gray-600 dark:text-gray-200">
              <td className="px-4 py-4 border-b dark:border-gray-600">
                <div className="flex flex-row gap-2 px-2 sm:px-0 sm:gap-5 items-center">
                  <img src="/image 19.png" alt="img" className="w-10 h-10 rounded" />
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      Lorem Ipsum ha sido el texto de relleno estándar de las...
                    </p>
                   
                </div>
              </td>
              <td className="px-6 py-4 border-b dark:border-gray-600">24/May/2024</td>
              <td className="px-6 py-4 border-b dark:border-gray-600">28k</td>
              <td className="px-6 py-4 border-b dark:border-gray-600">28k</td>
              <td className="px-6 py-4 border-b dark:border-gray-600">28k</td>
              <td className="px-6 py-4 border-b dark:border-gray-600 ">
                <button className='bg-[#FDC546] rounded-full p-2 text-[12px] text-black font-medium'>Request a content optimization</button>
              </td>
            </tr>
            {/* Additional rows can be added here */}
          </tbody>
        </table>
      </div>
    </div>
    )
}
export default Contentperformance;