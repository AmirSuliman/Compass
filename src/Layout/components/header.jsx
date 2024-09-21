import { ChevronDown, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex flex-col w-full px-8">
      <div className="flex flex-grow items-center justify-between  py-4 ">
        {/* Left: Welcome Section */}
        <div className="flex flex-col w-full">
          <h1 className="text-[20px] font-medium text-black">
            Welcome back, Bocil Prik
          </h1>
          <p className="text-sm text-gray-400">22 September 2022 | 10:45 AM</p>
        </div>

        <div className="flex flex-row items-center justify-end gap-4 w-full">
          <div className="relative hidden sm:flex items-center rounded-full bg-white px-4 py-3 w-[750px]">
            <input
              type="search"
              placeholder="Search..."
              className="w-full bg-transparent text-black focus:outline-none"
            />
            <Search className="text-gray-400" />
          </div>

          {/* Notification Icon */}
          <div className="bg-white rounded-full p-3 shadow-md">
            <img
              src="/bell-01.png"
              alt="Notification Icon"
              className="h-6 w-6"
            />
          </div>

          {/* Profile Avatar */}
          <div className="bg-[#FDC546] rounded-full p-1 shadow-md">
            <img
              src="/Memoji Boys 6-18.png"
              alt="Profile Avatar"
              className="h-10 w-10"
            />
          </div>

          {/* Dropdown Icon */}
          <ChevronDown className="text-gray-400" />
        </div>
      </div>

      {/* Horizontal Line at the Bottom */}
      <div className="w-auto bg-gray-200 h-[1.5px] " />
    </header>
  );
};

export default Header;
