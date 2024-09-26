import { Bell, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = ({ children }) => {
  const navigate= useNavigate();
  const handleNavigate = () => {
    navigate('/user/notification'); 
  };
  const handleNavigateprofile = () => {
    navigate('/user/profile'); 
  };
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
      <button className="bg-white rounded-full p-3 shadow-md aspect-square grow-0 shrink-0 flex items-center justify-center">
        <Bell onClick={handleNavigate}/>
      </button>

      {/* Profile Avatar */}
      <button 
      onClick={handleNavigateprofile}
      className="bg-[#FDC546] w-12 h-12 aspect-square grow-0 shrink-0 flex items-center justify-center rounded-full shadow-md">
        <img
          src="/Memoji Boys 6-18.png"
          alt="Profile Avatar"
          className="h-10 w-10 rounded-full"
        />
      </button>

      {/* Dropdown Icon */}
      <ChevronDown className="text-gray-400 cursor-pointer" />
    </header>
  );
};

export default Header;
