import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Grid,
  Calendar,
  Settings,
  CircleHelp,
  CalendarClock,
  LayoutDashboard,
  Gauge,
  SaveAll,
  Menu,
} from 'lucide-react';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 768);
  const [, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      setShowSidebar(!isMobileView); // Show sidebar if not mobile, hide if mobile
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setShowSidebar(!showSidebar);
        }}
        className="fixed top-4 right-4 font-light text-3xl size-[50px] flex items-center justify-center z-[100] bg-Yellow text-white rounded-lg md:hidden"
      >
        {showSidebar ? 'x' : <Menu size={40} />}
      </button>
      <aside
        className={`fixed left-0 top-0 bottom-0 z-[100] flex h-screen w-max flex-col overflow-y-hidden duration-300 ease-linear lg:static lg:translate-x-0 ${
          showSidebar
            ? '-translate-x-0 transition-all ease-in-out duration-500 shadow-lg'
            : '-translate-x-full transition-all ease-in-out duration-500'
        } bg-white`}
      >
        <NavLink to="/" className="block mx-auto mt-4">
          <img src="/compass.svg" alt="logo" className="size-32" />
        </NavLink>

        <nav className="px-4 no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <ul className="flex flex-col mt-8 text-gray-500 ">
            <h1 className="text-sm text-black font-medium ml-8">ANALYTICAL</h1>

            {/* Menu Item: Performance */}
            <li
              className={`${
                pathname.includes('/dashboard') ? 'bg-black rounded-md' : ''
              } rounded-sm`}
            >
              <NavLink
                to="/"
                className={`flex items-center gap-6 px-8 py-4 font-medium ${
                  pathname.includes('/dashboard')
                    ? 'text-white'
                    : 'text-[#8EA1B3]'
                } hover:text-[#8EA1B3] hover:bg-transparent`} // Removes hover blue effect
              >
                <Gauge size={22} />
                <span>Performance</span>
              </NavLink>
            </li>

            {/* Menu Item: Dashboard */}
            <li
              className={`${
                pathname.includes('/project') ? 'bg-black rounded-md' : ''
              } rounded-sm`}
            >
              <NavLink
                to="/"
                className={`flex items-center gap-6 px-8 py-4 font-medium ${
                  pathname.includes('/project')
                    ? 'text-white'
                    : 'text-[#8EA1B3]'
                } hover:text-[#8EA1B3] hover:bg-transparent`} // Removes hover blue effect
              >
                <LayoutDashboard size={22} />
                <span>Dashboard</span>
              </NavLink>
            </li>

            {/* Menu Item: Connections */}
            <li
              className={`${
                pathname.includes('/saved-content') ? 'bg-black rounded-md' : ''
              } rounded-sm`}
            >
              <NavLink
                to="/saved-content"
                className={`flex items-center gap-6 px-8 py-4 font-medium ${
                  pathname.includes('/saved-content')
                    ? 'text-white'
                    : 'text-[#8EA1B3]'
                } hover:text-[#8EA1B3] hover:bg-transparent`} // Removes hover blue effect
              >
                <CalendarClock size={22} />
                <span>Connections</span>
              </NavLink>
            </li>

            {/* Menu Item: Brand Setting */}
            <li
              className={`${
                pathname.includes('/brand-setting') ? 'bg-black rounded-md' : ''
              } rounded-sm`}
            >
              <NavLink
                to="/"
                className={`flex items-center gap-6 px-8 py-4 font-medium ${
                  pathname.includes('/brand-setting')
                    ? 'text-white'
                    : 'text-[#8EA1B3]'
                } hover:text-[#8EA1B3] hover:bg-transparent`} // Removes hover blue effect
              >
                <SaveAll size={22} />
                <span>Brand setting</span>
              </NavLink>
            </li>

            {/* Menu Item: Support */}
            <li
              className={`${
                pathname.includes('/support') ? 'bg-black rounded-md' : ''
              } rounded-sm`}
            >
              <NavLink
                to="/"
                className={`flex items-center gap-6 px-8 py-4 font-medium ${
                  pathname.includes('/support')
                    ? 'text-white'
                    : 'text-[#8EA1B3]'
                } hover:text-[#8EA1B3] hover:bg-transparent`} // Removes hover blue effect
              >
                <CircleHelp size={22} />
                <span>Support</span>
              </NavLink>
            </li>

            {/* Menu Item: Setting */}
            <li
              className={`${
                pathname.includes('/settings') ? 'bg-black rounded-md' : ''
              } rounded-sm`}
            >
              <NavLink
                to="/"
                className={`flex items-center gap-6 px-8 py-4 font-medium ${
                  pathname.includes('/settings')
                    ? 'text-white'
                    : 'text-[#8EA1B3]'
                } hover:text-[#8EA1B3] hover:bg-transparent`} // Removes hover blue effect
              >
                <Settings size={22} />
                <span>Setting</span>
              </NavLink>
            </li>

            {/* Menu Item: Calendar */}
            <li
              className={`${
                pathname.includes('/calendar') ? 'bg-black rounded-md' : ''
              } rounded-sm`}
            >
              <NavLink
                to="/"
                className={`flex items-center gap-6 px-8 py-4 font-medium ${
                  pathname.includes('/calendar')
                    ? 'text-white'
                    : 'text-[#8EA1B3]'
                } hover:text-[#8EA1B3] hover:bg-transparent`} // Removes hover blue effect
              >
                <Calendar size={22} />
                <span>Calendar</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
