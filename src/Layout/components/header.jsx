import { ChevronDown } from 'lucide-react';

const Header = ({ children }) => {
  return (
    <header className="flex gap-4 w-full px-8 items-center justify-between py-4">
      <div className="flex flex-col w-full">
        <h1 className="text-[20px] font-medium text-black">
          Welcome back, Bocil Prik
        </h1>
        <p className="text-sm text-gray-400">22 September 2022 | 10:45 AM</p>
      </div>

      {/* search/tabs/empty or other data */}
      {children}

      {/* Notification Icon */}
      <div className="bg-white rounded-full p-3 shadow-md">
        <img src="/bell-01.png" alt="Notification Icon" className="h-6 w-6" />
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
    </header>
  );
};

export default Header;
