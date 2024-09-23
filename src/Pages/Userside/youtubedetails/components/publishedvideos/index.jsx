import PublishedVideosLinechart from "./linechart"
import PublishedVideosCards from "./cards"
import PublishedVideosListOfVideosTable from "./listofvideostable"
import { CloudDownload, Search } from "lucide-react"

const PublishedVideos = () => {
  return (
    <>
      <div className='bg-white rounded-md py-2 px-4 md:py-4 md:px-8 mt-4'>
        <div className='text-xl font-bold'>Published Videos</div>
        <div className='grid grid-cols-2 md:grid-cols-6 gap-2 mt-4'>
          <PublishedVideosCards />
        </div>
        <PublishedVideosLinechart />
      </div>

      <div className='bg-white rounded-md py-2 px-4 md:py-4 md:px-8 mt-4'>
        <div className='flex flex-col md:flex-row gap-2 items-start md:items-center justify-between'>
          <span className='text-lg font-bold'>List of Videos</span>
          <div className='flex items-center mt-4 gap-2'>
            <div className='bg-[#f8f8f8] flex px-4 py-3 rounded-full gap-2 items-center'>
              <CloudDownload size={16} />
              <span className='text-xs text-nowrap'>Download CSV</span>
            </div>
            <div className='relative w-full'>
              <input
                type='text'
                placeholder='Search...'
                className='w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f8f8f8] rounded-full'
              />
              <button
                onClick={() => {}}
                className='absolute right-3 top-[43%] transform -translate-y-1/2 text-gray-500 hover:text-blue-600'
              >
                <Search size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className='w-full overflow-auto mt-4'>
          <PublishedVideosListOfVideosTable />
        </div>
      </div>
    </>
  )
}

export default PublishedVideos
