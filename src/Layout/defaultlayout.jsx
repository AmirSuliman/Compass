import React from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';

const DefaultLayout = ({ children }) => {
  return (
    <div className="relative w-full overflow-hidden bg-[#f8f8f8] text-black">
      {/* Background decorations */}
      <div
        className="absolute bottom-2 left-10 xl:bottom-[15%] xl:left-[15%] w-150 rounded-full h-96 opacity-10 blur-2xl"
      ></div>
      <div
        className="absolute top-[20%] left-[20%] xl:top-[30%] xl:left-[50%] rounded-full h-96 opacity-10 blur-2xl"
        style={{
          background: 'radial-gradient(circle, #f45959 0%, #222225 100%)',
        }}
      ></div>
      
      <div className="flex flex-row h-screen overflow-hidden">
        <Sidebar />
        
        {/* Main Content Area */}
        <div className="relative flex flex-1 flex-col min-h-screen overflow-y-auto overflow-x-hidden">
          <Header />
          <main className="p-4 md:p-6 2xl:p-10 bg-[#f8f8f8] flex-1">
            <div className="mx-auto max-w-screen-2xl 2xl:max-w-[2000px]">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
