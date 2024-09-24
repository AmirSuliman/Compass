import { ArrowDown, ArrowLeftRight, Youtube } from "lucide-react"
import CompetitorsTable from "./competitorstable"

const Competitors = () => {
  return (
    <>
      <div className='flex justify-between md:items-center gap-4 md:gap-0 flex-col md:flex-row py-2 md:px-8 mt-4'>
        <div className='text-xl font-bold'>List of Competitors</div>
        <div className='flex items-center justify-between  md:gap-4'>
          <div className='text-sm gap-2 flex items-center  px-4 py-2 rounded-lg justify-center bg-white'>
            <Youtube size={16} />
              Youtube
            <ArrowDown size={14} />
          </div>
          <div className='flex items-center justify-center text-xs px-4 py-2 gap-2 border border-blue-500 rounded-full'>
            <ArrowLeftRight size={14} />
            Compare
          </div>
          <div className='text-xs text-nowrap bg-blue-500 text-white px-4 py-2 rounded-full'>
            Add Competitor
          </div>
        </div>
      </div>

      <div className='bg-white rounded-md py-2 px-4 md:py-4 md:px-8 mt-4 w-full overflow-auto'>
        <CompetitorsTable />
      </div>
    </>
  )
}

export default Competitors
