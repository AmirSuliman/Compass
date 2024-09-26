import {ChevronDown, NotepadText, Plus, Images,SmilePlus,Link, ChartSpline,Calendar } from 'lucide-react'

const Createpost = ({
    postContent,
    handleInputChange,
    handleCreatePost,
    toggleModal,
  }) => {
    return (
      <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
        <div className='bg-[#F8F8F8] rounded-lg p-6 w-[90%] md:w-[900px]'>
        <div className="flex flex-row items-center justify-between">
        <h2 className='text-2xl font-semibold mb-4'>Create New Post</h2>
          <div className="flex sm:flex-row flex-col gap-2 ">
            <button className='flex flex-row gap-2 bg-white p-2 rounded-md'>
            <NotepadText />
            <p>Best Time</p>
            <ChevronDown className='ml-4'/>
            </button>

            <button className='flex flex-row gap-2 bg-white p-2 rounded-md'>
            <img src='/image 13.png' alt='img'/>
            <p>Youtube</p>
            <ChevronDown className='ml-4'/>
            </button>
            <button className='flex flex-row gap-2 bg-white p-2 rounded-full'>
            <Plus/>
            </button>
          </div>

        </div>
        <div className=' p-4 border border-gray-400 rounded-md mt-8'>
            <div className='flex sm:flex-row flex-col  w-full items-center justify-between'>
                <div className='flex flex-row gap-3'>
                <Images />
                <SmilePlus />
                <Link />
                <ChartSpline />
                </div>
                <button className='flex flex-row gap-2 bg-white p-2 rounded-md border'>
                <Calendar />
                <p>1 Jan _ 31 Jan 2024</p>
                </button>
            </div>
        <textarea
            value={postContent}
            onChange={handleInputChange}
            className='w-full p-2 bg-[#F8F8F8] rounded-lg mb-4'
            rows={10}
          />
        </div>
         
          <div className='text-right gap-4 mt-4'>
            <button
              onClick={toggleModal}
              className='flex-1  py-2 px-4 rounded-lg mr-4 border border-blue-500 w-24'
            >
             Close
            </button>
            <button
              onClick={handleCreatePost}
              className='flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg w-24'
            >
              Create
            </button>
          </div>
         
        </div>
      </div>
    );
  };
  
  export default Createpost;
  