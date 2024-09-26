import { useState } from 'react';
import Socials from './components/socials';

const Content = () => {
  const [activeTab, setActiveTab] = useState('Socials');

  const tabs = ['Socials', 'Websites', 'Email'];

  return (
    <div className="w-full">
      <h1 className="text-[20px] font-semibold mb-4">Content</h1>

      {/* Tab Header */}
      <div className="border-b border-gray-300 mb-8 w-[300px]">
        <div className="flex justify-start space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-2 font-medium ${
                activeTab === tab
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'Socials' && (
          <div>
            <Socials />
          </div>
        )}
        {activeTab === 'Websites' && (
          <div>
            <p>This is the Websites tab content.</p>
          </div>
        )}
        {activeTab === 'Email' && (
          <div>
            <p>This is the Email tab content.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
