import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/">
              <img src="/compass.svg" alt="logo" className="size-32 mt-2" />
            </Link>
            <div className="hidden md:flex space-x-8">
              <NavLink
                to="#"
                className="text-[#2E2F3A] font-inter font-semibold hover:text-gray-900"
              >
                Product
              </NavLink>
              <NavLink
                to="#"
                className="text-[#2E2F3A] font-inter font-semibold hover:text-gray-900"
              >
                Pricing
              </NavLink>
              <NavLink
                to="#"
                className="text-[#2E2F3A] font-inter font-semibold hover:text-gray-900"
              >
                Resources
              </NavLink>
              <NavLink
                to="#"
                className="text-[#2E2F3A] font-inter font-semibold hover:text-gray-900"
              >
                Contact
              </NavLink>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="font-inter px-6 py-1 text-[#2E2F3A] font-semibold"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="font-inter px-6 py-1 text-white bg-[#52CC8A] rounded-full"
            >
              Signup
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-2 px-2 pt-2 pb-3">
            <NavLink
              to="#"
              className="block text-[#2E2F3A] font-inter font-semibold hover:text-gray-900"
            >
              Product
            </NavLink>
            <NavLink
              to="#"
              className="block text-[#2E2F3A] font-inter font-semibold hover:text-gray-900"
            >
              Pricing
            </NavLink>
            <NavLink
              to="#"
              className="block text-[#2E2F3A] font-inter font-semibold hover:text-gray-900"
            >
              Resources
            </NavLink>
            <NavLink
              to="#"
              className="block text-[#2E2F3A] font-inter font-semibold hover:text-gray-900"
            >
              Contact
            </NavLink>
          </div>
          <div className="flex flex-col items-center space-y-2 px-6 pb-3">
            <Link className="w-full px-4 py-2 text-[#2E2F3A] font-semibold border border-gray-400 rounded-xl">
              Login
            </Link>
            <Link className="w-full px-4 py-2 text-white bg-[#52CC8A] rounded-xl">
              Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
