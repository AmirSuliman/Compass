import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Calendar,
  Settings,
  CircleHelp,
  CalendarClock,
  LayoutDashboard,
  Gauge,
  SaveAll,
  Menu,
} from 'lucide-react';

const Sidebar = () => {
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
        className={`fixed left-0 top-0 bottom-0 sm:z-0 z-[100] flex h-screen w-max flex-col overflow-y-hidden duration-300 ease-linear lg:static lg:translate-x-0 ${
          showSidebar
            ? '-translate-x-0 transition-all ease-in-out duration-500 shadow-lg'
            : '-translate-x-full transition-all ease-in-out duration-500'
        } bg-white`}
      >
        <NavLink to="/" className="block mx-auto mt-4">
          <img src="/compass.svg" alt="logo" className="size-32" />
        </NavLink>

        <nav className="px-4 no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <h1 className="text-sm text-black font-medium ml-8">ANALYTICAL</h1> */}

          {/* Menu Item: Performance */}
          {/* <NavLink
            to="/"
            className={`flex items-center gap-6 px-8 py-4 text-sm ${
              pathname.includes('/dashboard')
                ? 'text-white bg-black rounded-md font-semibold'
                : 'text-steel-blue-gray'
            }`}
          >
            <Gauge size={22} />
            <span>Performance</span>
          </NavLink> */}

          {/* Menu Item: Dashboard */}
          <NavLink
            to="/admin-dashboard"
            className={`flex items-center gap-6 px-8 py-4 text-sm ${
              pathname.includes('/admin-dashboard')
                ? 'text-white bg-black rounded-md font-semibold'
                : 'text-steel-blue-gray'
            }`}
          >
            <LayoutDashboard size={22} />
            <span>Dashboard</span>
          </NavLink>

          {/* Menu Item: Connections */}

          <NavLink
            to="/admin/all-users"
            className={`flex items-center gap-6 px-8 py-4 text-sm ${
              pathname.includes('/admin/all-users')
                ? 'text-white bg-black rounded-md font-semibold'
                : 'text-steel-blue-gray'
            }`}
          >
            <CalendarClock size={22} />
            <span>User Management</span>
          </NavLink>

          {/* Menu Item: Revenue */}

          <NavLink
            to="/admin/revenue"
            className={`flex items-center gap-6 px-8 py-4 text-sm ${
              pathname.includes('/admin/revenue')
                ? 'text-white bg-black rounded-md font-semibold'
                : 'text-steel-blue-gray'
            }`}
          >
            <SaveAll size={22} />
            <span>Revenue</span>
          </NavLink>

          {/* Menu Item: Support */}

          <NavLink
            to="/admin/campaigns"
            className={`flex items-center gap-6 px-8 py-4 text-sm ${
              pathname.includes('/admin/campaigns')
                ? 'text-white bg-black rounded-md font-semibold'
                : 'text-steel-blue-gray'
            }`}
          >
            <CircleHelp size={22} />
            <span>Campaigns</span>
          </NavLink>
          <NavLink
            to="/admin/ai-content-optimization"
            className={`flex items-center gap-6 px-8 py-4 text-sm ${
              pathname.includes('/admin/ai-content-optimization')
                ? 'text-white bg-black rounded-md font-semibold'
                : 'text-steel-blue-gray'
            }`}
          >
            <CircleHelp size={22} />
            <span>Optimizations</span>
          </NavLink>
          <NavLink
            to="/admin/subscribedplan"
            className={`flex items-center gap-6 px-8 py-4 text-sm ${
              pathname.includes('/admin/subscribedplan')
                ? 'text-white bg-black rounded-md font-semibold'
                : 'text-steel-blue-gray'
            }`}
          >
            <CircleHelp size={22} />
            <span>Subscriptions</span>
          </NavLink>
          <NavLink
            to="/admin/suggestions"
            className={`flex items-center gap-6 px-8 py-4 text-sm ${
              pathname.includes('/admin/suggestions')
                ? 'text-white bg-black rounded-md font-semibold'
                : 'text-steel-blue-gray'
            }`}
          >
            <CircleHelp size={22} />
            <span>Suggestions</span>
          </NavLink>

          {/* Menu Item: Setting */}
          <NavLink
            to="/admin/ai-content"
            className={`flex items-center gap-6 px-8 py-4 text-sm ${
              pathname.includes('/admin/ai-content')
                ? 'text-white bg-black rounded-md font-semibold'
                : 'text-steel-blue-gray'
            }`}
          >
            <Settings size={22} />
            <span>AI content</span>
          </NavLink>

          {/* Menu Item: Calendar */}

          <NavLink
            to="/"
            className={`flex items-center gap-6 px-8 py-4 text-sm ${
              pathname.includes('/calendar')
                ? 'text-white bg-black rounded-md font-semibold'
                : 'text-steel-blue-gray'
            }`}
          >
            <Calendar size={22} />
            <span>Calendar</span>
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
