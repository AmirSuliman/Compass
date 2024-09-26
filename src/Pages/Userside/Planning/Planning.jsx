import { useState } from 'react';
import Calendar from './Calender';
import Createpost from './createpostmodal';
import { Filter, Search, CirclePlus } from 'lucide-react';

const Planning = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [activeTab, setActiveTab] = useState('calendar'); // state to track the active tab

  // Function to handle modal open/close
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to handle input change for post content
  const handleInputChange = (e) => {
    setPostContent(e.target.value);
  };

  // Function to handle clearing the input
  const handleClear = () => {
    setPostContent('');
  };

  // Function to handle post submission
  const handleCreatePost = () => {
    console.log('Post Created:', postContent);
    setPostContent(''); // Clear input after submission
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className='w-full'>
      <div className='flex flex-col sm:flex-row items-center justify-between'>
        {/* Tabs for Calendar, List, and Autolist */}
        <div className='flex flex-row gap-12'>
          <p
            className={`cursor-pointer ${activeTab === 'calendar' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700'}`}
            onClick={() => setActiveTab('calendar')}
          >
            Calendar
          </p>
          <p
            className={`cursor-pointer ${activeTab === 'list' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700'}`}
            onClick={() => setActiveTab('list')}
          >
            List
          </p>
          <p
            className={`cursor-pointer ${activeTab === 'autolist' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700'}`}
            onClick={() => setActiveTab('autolist')}
          >
            Autolists
          </p>
        </div>

        {/* Search Bar */}
        <div className='flex flex-col sm:flex-row gap-4'>
        <div className='p-3 bg-white rounded-full flex flex-row items-center justify-between sm:w-[400px]'>
          <input type='text' placeholder='Search' className='outline-none' />
          <Search />
        </div>

        {/* Filter Button */}
        <div className='flex flex-row gap-4'>
        <button className=' bg-white border px-4 py-2 rounded-md flex flex-row gap-3 items-center'>
          <Filter />
          Filter
        </button>

        {/* Create Post Button */}
        <button
          onClick={toggleModal}
          className=' bg-[#FDC546] px-4 py-2 rounded-md flex flex-row gap-3 items-center'
        >
          <CirclePlus />
          Create post
        </button>
        </div>
       
        </div>
       
      </div>

      {/* Conditional Rendering of Content Based on Active Tab */}
      <div className='mt-4'>
        {activeTab === 'calendar' && <Calendar />}
        {activeTab === 'list' && <div>List View Content</div>}
        {activeTab === 'autolist' && <div>Autolist View Content</div>}
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <Createpost
          postContent={postContent}
          handleInputChange={handleInputChange}
          handleClear={handleClear}
          handleCreatePost={handleCreatePost}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
};

export default Planning;
