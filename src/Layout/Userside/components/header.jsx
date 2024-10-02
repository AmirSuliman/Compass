import { Bell, ChevronDown } from 'lucide-react';

const Header = ({ children }) => {
  return (
    <div className='px-4'>
 <header className="flex gap-4 w-full  items-center justify-between py-4">
      <div className="flex flex-col w-full">
        <h1 className="text-[20px] font-medium text-black">
          Welcome back, Bocil Prik
        </h1>
        <p className="text-sm text-gray-400">22 September 2022 | 10:45 AM</p>
      </div>

      {/* search/tabs/empty or other data */}
      {children}

      {/* Notification Icon */}
      <button className="bg-white rounded-full p-3 shadow-md aspect-square grow-0 shrink-0 flex items-center justify-center">
        <Bell />
      </button>

      {/* Profile Avatar */}
      <button className="bg-[#FDC546] w-12 h-12 aspect-square grow-0 shrink-0 flex items-center justify-center rounded-full shadow-md">
        <img
          src="/Memoji Boys 6-18.png"
          alt="Profile Avatar"
          className="h-10 w-10 rounded-full"
        />
      </button>

      {/* Dropdown Icon */}
      <ChevronDown className="text-gray-400 cursor-pointer" />
    </header>
    <div className='px-8 bg-gray-200 w-full h-[2px] '/>

    </div>
   
  );
};

export default Header;
