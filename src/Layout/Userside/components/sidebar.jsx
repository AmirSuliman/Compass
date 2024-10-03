import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Calendar,
  Settings,
  CircleHelp,
  CalendarClock,
  LayoutDashboard,
  SaveAll,
  Cog,
  Menu,
  ChevronDown,
  ChartColumnBig,
  Mail,
  NotebookTabs,
} from 'lucide-react';
import CampaignIcon from '../../Adminside/components/CampaignIcon';

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 768);
  const [, setIsMobile] = useState(window.innerWidth < 768);

  // Dropdown state for Connections
  const [isConnectionsOpen, setIsConnectionsOpen] = useState(false);

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
          {/* Menu Item: Dashboard */}
          <NavLink
            to="/user-dashboard"
            className={`flex items-center gap-6 px-8 py-4 text-sm ${
              pathname === '/user-dashboard'
                ? 'text-white bg-black rounded-md font-semibold'
                : 'text-steel-blue-gray'
            }`}
          >
            <LayoutDashboard size={22} />
            <span>Dashboard</span>
          </NavLink>

          {/* Menu Item: Connections with Dropdown */}
          <div className="flex flex-col">
            <NavLink to={'/user/overview'}>
            <button
              className={`flex items-center gap-6 px-8 py-4 text-sm w-full ${
                pathname.includes('/user/overview')
                  ? 'text-white bg-black rounded-md font-semibold'
                  : 'text-steel-blue-gray'
              }`}
             
            >
              <CalendarClock size={22} />
              <span>Connections</span>
              <ChevronDown
               onClick={() => setIsConnectionsOpen(!isConnectionsOpen)}
                size={20}
                className={`ml-auto transition-transform ${
                  isConnectionsOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            </NavLink>

            {/* Dropdown Items */}
            {isConnectionsOpen && (
              <div className="ml-12 flex flex-col">
                <NavLink
                  to="/user/overview/inbox"
                  className={`flex items-center gap-6 px-8 py-2 text-sm ${
                    pathname === '/user/overview/inbox'
                      ? 'text-white bg-black rounded-md font-semibold'
                      : 'text-steel-blue-gray'
                  }`}
                >
                  <Mail size={20} />
                  <span>Inbox</span>
                </NavLink>

                <NavLink
                  to="/user/overview/planning"
                  className={`flex items-center gap-6 px-8 py-2 text-sm ${
                    pathname === '/user/overview/planning'
                      ? 'text-white bg-black rounded-md font-semibold'
                      : 'text-steel-blue-gray'
                  }`}
                >
                  <NotebookTabs size={20} />
                  <span>Planning</span>
                </NavLink>

                <NavLink
                  to="/user/overview/analytics"
                  className={`flex items-center gap-6 px-8 py-2 text-sm ${
                    pathname === '/user/overview/analytics'
                      ? 'text-white bg-black rounded-md font-semibold'
                      : 'text-steel-blue-gray'
                  }`}
                >
                  <ChartColumnBig size={20} />
                  <span>Analytics</span>
                </NavLink>
              </div>
            )}
          </div>

          {/* Menu Item: Content Performance */}
          <NavLink
            to="/user/content-performance"
            className={`flex items-center gap-6 px-8 py-4 text-sm ${
              pathname === '/user/content-performance'
                ? 'text-white bg-black rounded-md font-semibold'
                : 'text-steel-blue-gray'
            }`}
          >
            <CalendarClock size={22} />
            <span>Content Performance</span>
          </NavLink>

          {/* Menu Item: Content Optimization */}
          <NavLink
            to="/user/ai/campaigns"
            className={`flex items-center gap-6 px-8 py-4 text-sm ${
              pathname.includes('/user/ai')
                ? 'text-white bg-black rounded-md font-semibold'
                : 'text-steel-blue-gray'
            }`}
          >
            <Cog size={22} />
            <span>Content Optimization</span>
          </NavLink>

          {/* Menu Item: Campaigns */}
          <NavLink
            to="/user/history/goals"
            className={`flex items-center gap-6 px-8 py-4 text-sm ${
              pathname.includes('/user/history')
                ? 'text-white bg-black rounded-md font-semibold'
                : 'text-steel-blue-gray'
            }`}
          >
            <CampaignIcon
              color={`${
                pathname.includes('/user/history') ? '#ffffff' : '#8ea1b3'
              }`}
            />
            <span>Campaigns</span>
          </NavLink>

          {/* Menu Item: Setting */}
          <NavLink
            to="/user/setting"
            className={`flex items-center gap-6 px-8 py-4 text-sm ${
              pathname === '/user/setting'
                ? 'text-white bg-black rounded-md font-semibold'
                : 'text-steel-blue-gray'
            }`}
          >
            <Settings size={22} />
            <span>Setting</span>
          </NavLink>

          {/* Menu Item: Brand Setting */}
          <NavLink
            to="/"
            className={`flex items-center gap-6 px-8 py-4 text-sm ${
              pathname.includes('/brand-setting')
                ? 'text-white bg-black rounded-md font-semibold'
                : 'text-steel-blue-gray'
            }`}
          >
            <SaveAll size={22} />
            <span>Brand setting</span>
          </NavLink>

          {/* Menu Item: Support */}
          <NavLink
            to="/"
            className={`flex items-center gap-6 px-8 py-4 text-sm ${
              pathname.includes('/support')
                ? 'text-white bg-black rounded-md font-semibold'
                : 'text-steel-blue-gray'
            }`}
          >
            <CircleHelp size={22} />
            <span>Support</span>
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
