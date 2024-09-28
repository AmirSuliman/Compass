import UsersTable from "./components/UsersTable"
import AddUserModal from "./components/AddUserModal";
import { useState } from "react";
import EditUserModal from "./components/EditUserModal";

const Allusers = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)  


  return (
    <div className="grid gap-6">

      {/* Add User Modal */}
      {isModalOpen && <AddUserModal setIsModalOpen={setIsModalOpen} />}

      <div className='flex items-center justify-between'>
        <span className='text-xl font-semibold'>All Users</span>
        <div>
          <button className='bg-yellow-500 rounded-full px-6 py-2 font-semibold' onClick={() => setIsModalOpen(true)}>
            Add User
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <UsersTable />
      </div>
    </div>
  )
}

export default Allusers
