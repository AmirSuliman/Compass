import Table from "../home/table"
import TopCards from "./components/TopCards"

const Comments = () => {
  return (
    <div className='py-4'>
      <TopCards />

      <div className='py-6 overflow-x-auto'>
        <Table />
      </div>
    </div>
  )
}

export default Comments
