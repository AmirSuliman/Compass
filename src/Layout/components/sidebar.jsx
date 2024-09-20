import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Grid, Calendar, Settings, CircleHelp, CalendarClock, LayoutDashboard, Gauge, SaveAll } from 'lucide-react';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;
  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [sidebarOpen]);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [sidebarOpen]);

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-max flex-col overflow-y-hidden duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } bg-white`}
    >
      <div className="bg-white">
        <div className="flex items-center justify-between gap-2 px-6 py-4">
          <NavLink to="/">
          <img src='/Frame 2085660514.png' alt='img'/>

          </NavLink>
         
        </div>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="px-4">
          <ul className="flex flex-col mt-8 text-gray-500 ">
            <h1 className="text-sm text-black font-medium ml-8">ANALYTICAL</h1>

            {/* Menu Item: Performance */}
            <li className={`${pathname.includes('/dashboard') ? 'bg-black rounded-md' : ''} rounded-sm`}>
              <NavLink
                to="/"
                className={`flex items-center gap-6 px-8 py-4 font-medium ${
                  pathname.includes('/dashboard') ? 'text-white' : 'text-[#8EA1B3]'
                } hover:text-[#8EA1B3] hover:bg-transparent`} // Removes hover blue effect
              >
                <Gauge size={22} />
                <span>Performance</span>
              </NavLink>
            </li>

            {/* Menu Item: Dashboard */}
            <li className={`${pathname.includes('/project') ? 'bg-black rounded-md' : ''} rounded-sm`}>
              <NavLink
                to="/"
                className={`flex items-center gap-6 px-8 py-4 font-medium ${
                  pathname.includes('/project') ? 'text-white' : 'text-[#8EA1B3]'
                } hover:text-[#8EA1B3] hover:bg-transparent`} // Removes hover blue effect
              >
                <LayoutDashboard size={22} />
                <span>Dashboard</span>
              </NavLink>
            </li>

            {/* Menu Item: Connections */}
            <li className={`${pathname.includes('/saved-content') ? 'bg-black rounded-md' : ''} rounded-sm`}>
              <NavLink
                to="/saved-content"
                className={`flex items-center gap-6 px-8 py-4 font-medium ${
                  pathname.includes('/saved-content') ? 'text-white' : 'text-[#8EA1B3]'
                } hover:text-[#8EA1B3] hover:bg-transparent`} // Removes hover blue effect
              >
                <CalendarClock size={22} />
                <span>Connections</span>
              </NavLink>
            </li>

            {/* Menu Item: Brand Setting */}
            <li className={`${pathname.includes('/brand-setting') ? 'bg-black rounded-md' : ''} rounded-sm`}>
              <NavLink
                to="/"
                className={`flex items-center gap-6 px-8 py-4 font-medium ${
                  pathname.includes('/brand-setting') ? 'text-white' : 'text-[#8EA1B3]'
                } hover:text-[#8EA1B3] hover:bg-transparent`} // Removes hover blue effect
              >
                <SaveAll size={22} />
                <span>Brand setting</span>
              </NavLink>
            </li>

            {/* Menu Item: Support */}
            <li className={`${pathname.includes('/support') ? 'bg-black rounded-md' : ''} rounded-sm`}>
              <NavLink
                to="/"
                className={`flex items-center gap-6 px-8 py-4 font-medium ${
                  pathname.includes('/support') ? 'text-white' : 'text-[#8EA1B3]'
                } hover:text-[#8EA1B3] hover:bg-transparent`} // Removes hover blue effect
              >
                <CircleHelp size={22} />
                <span>Support</span>
              </NavLink>
            </li>

            {/* Menu Item: Setting */}
            <li className={`${pathname.includes('/settings') ? 'bg-black rounded-md' : ''} rounded-sm`}>
              <NavLink
                to="/"
                className={`flex items-center gap-6 px-8 py-4 font-medium ${
                  pathname.includes('/settings') ? 'text-white' : 'text-[#8EA1B3]'
                } hover:text-[#8EA1B3] hover:bg-transparent`} // Removes hover blue effect
              >
                <Settings size={22} />
                <span>Setting</span>
              </NavLink>
            </li>

            {/* Menu Item: Calendar */}
            <li className={`${pathname.includes('/calendar') ? 'bg-black rounded-md' : ''} rounded-sm`}>
              <NavLink
                to="/"
                className={`flex items-center gap-6 px-8 py-4 font-medium ${
                  pathname.includes('/calendar') ? 'text-white' : 'text-[#8EA1B3]'
                } hover:text-[#8EA1B3] hover:bg-transparent`} // Removes hover blue effect
              >
                <Calendar size={22} />
                <span>Calendar</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
