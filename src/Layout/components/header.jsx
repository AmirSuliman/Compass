import { ChevronDown, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex w-full ">
      <div className="flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11 ">
        {/* Left: Welcome Section */}
        <div className="flex flex-col">
          <h1 className="text-[20px] font-medium text-black">Welcome back, Bocil Prik</h1>
          <p className="text-sm text-gray-400">22 September 2022 | 10:45 AM</p>
        </div>

        {/* Right: Search, Notifications, Profile */}
        <div className="flex items-center justify-end gap-4 ">
          {/* Search Bar */}
          <div className="relative hidden  sm:flex items-center rounded-full bg-white px-4 py-3 w-[700px]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent text-black focus:outline-none"
            />
            <Search className="text-gray-400" />
          </div>

          {/* Notification Icon */}
          <div className="bg-white rounded-full p-3 shadow-md">
            <img src="/bell-01.png" alt="Notification Icon" className="h-6 w-6" />
          </div>

          {/* Profile Avatar */}
          <div className="bg-[#FDC546] rounded-full p-1 shadow-md">
            <img src="/Memoji Boys 6-18.png" alt="Profile Avatar" className="h-10 w-10" />
          </div>

          {/* Dropdown Icon */}
          <ChevronDown className="text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default Header;
