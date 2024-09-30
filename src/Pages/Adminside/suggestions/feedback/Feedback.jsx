import { ArrowUp } from "lucide-react"
import FeedbackChart from "./components/FeedbackChart"
import Table from "./components/Table"

const Feedback = () => {
  return (
    <div className='py-4'>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='bg-white p-6 rounded-md shadow-md'>
          <div className="font-medium text-lg">Total Feedback</div>
          <div className="flex items-center justify-between">
            <span className="text-4xl">2M</span>
            <div className="flex items-center text-green-500 bg-green-100 px-1 rounded-md">
              <span>
                <ArrowUp size={16}/>
              </span>
              <span>26%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white mt-4 rounded-md">
        <FeedbackChart />
      </div>

      <div>
        <div className="font-semibold text-xl my-4">
          Recent Feedback
        </div>

        <div className="overflow-x-auto">
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Feedback
