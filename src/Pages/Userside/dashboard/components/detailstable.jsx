import { CloudDownload, Search } from 'lucide-react';

const DetailTable = () => {
  return (
    <div className="w-full border border-gray-300 rounded-md bg-white">
      {/* Header Section */}
      <div className="w-full flex flex-row items-center justify-between p-4">
        <h2 className="text-[#555555] font-medium text-[18px]">Details</h2>

        {/* Actions (Download CSV and Search) */}
        <div className="flex flex-row gap-2 text-[10px] items-center">
          {/* Download CSV Button */}
          <div className="flex flex-row gap-2 p-2 bg-gray-100 rounded-full px-4 cursor-pointer items-center justify-center">
            <CloudDownload size={16} />
            <p>Download CSV</p>
          </div>

          {/* Search Box */}
          <div className="flex flex-row items-center justify-between bg-gray-100 rounded-full p-2 px-4 text-gray-400">
            <input
              type="search"
              placeholder="Search..."
              className="bg-gray-100 outline-none text-gray-600 text-sm hidden lg:flex"
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
            <tr className="text-left text-gray-500 text-sm font-medium px-6 items-center justify-center">
              <th className="px-6 py-3 border-b">Date</th>
              <th className="px-6 py-3 border-b">KPI 1</th>
              <th className="px-6 py-3 border-b">KPI 2</th>
              <th className="px-6 py-3 border-b">KPI 3</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className='items-center justify-center'>
            <tr className="text-sm text-gray-600">
              <td className="px-6 py-4 border-b">24/May/2024</td>
              <td className="px-6 py-4 border-b">28k</td>
              <td className="px-6 py-4 border-b">28k</td>
              <td className="px-6 py-4 border-b">28k</td>
            </tr>
            <tr className="text-sm text-gray-600">
              <td className="px-6 py-4 border-b">25/May/2024</td>
              <td className="px-6 py-4 border-b">30k</td>
              <td className="px-6 py-4 border-b">30k</td>
              <td className="px-6 py-4 border-b">30k</td>
            </tr>
            <tr className="text-sm text-gray-600">
              <td className="px-6 py-4 border-b">25/May/2024</td>
              <td className="px-6 py-4 border-b">30k</td>
              <td className="px-6 py-4 border-b">30k</td>
              <td className="px-6 py-4 border-b">30k</td>
            </tr>
            <tr className="text-sm text-gray-600">
              <td className="px-6 py-4 border-b">25/May/2024</td>
              <td className="px-6 py-4 border-b">30k</td>
              <td className="px-6 py-4 border-b">30k</td>
              <td className="px-6 py-4 border-b">30k</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailTable;
