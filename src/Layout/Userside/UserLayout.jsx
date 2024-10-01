import React from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';

const DefaultLayout = ({ children, headerChildren }) => {
  return (
    <div className="flex flex-row h-screen relative w-full overflow-hidden bg-[#f8f8f8] text-black max-w-[1750px] mx-auto">
      <Sidebar />

      {/* Main Content Area */}
      <div className="relative flex flex-1 flex-col min-h-screen overflow-y-auto overflow-x-hidden w-full">
        <Header children={headerChildren} />
        <main className="p-4 md:p-6 2xl:p-10 bg-[#f8f8f8] flex-1 w-full mx-auto max-w-screen-2xl 2xl:max-w-[2000px]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
