import React from 'react';
import { Facebook, Linkedin, Twitter } from 'lucide-react'; // Importing icons from lucide-react

export default function Footer() {
  return (
    <footer className="bg-[#E6F8D1BD] py-10 lg:mt-8">
      <div className="max-w-7xl mx-auto px-5 ml-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-bold mb-4">Navigation</h3>
          <p className="text-gray-700 mb-2">Home</p>
          <p className="text-gray-700 mb-2">About Us</p>
          <p className="text-gray-700 mb-2">What We Do</p>
          <p className="text-gray-700 mb-2">To The Power Of 10</p>
          <p className="text-gray-700">Donate</p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-bold mb-4">What We Do</h3>
          <p className="text-gray-700 mb-2">Encouraging Testing</p>
          <p className="text-gray-700 mb-2">Strengthening Advocacy</p>
          <p className="text-gray-700 mb-2">Sharing Information</p>
          <p className="text-gray-700 mb-2">Building Leadership</p>
          <p className="text-gray-700 mb-2">Engaging With Global Fund</p>
          <p className="text-gray-700">Shining a Light</p>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-bold mb-4">LEGAL</h3>
          <p className="text-gray-700 mb-2">General Info</p>
          <p className="text-gray-700 mb-2">Privacy Policy</p>
          <p className="text-gray-700">Terms of Service</p>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-bold mb-4">TALK TO US</h3>
          <p className="text-gray-700 mb-2">support@ercom.com</p>
          <p className="text-gray-700 mb-2">+66 2399 1145</p>
          <p className="text-gray-700 mb-2">Contact Us</p>
          <p className="text-gray-700 mb-2">Facebook</p>
          <p className="text-gray-700 mb-2">Linkedin</p>
          <p className="text-gray-700">Twitter</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="mt-4" />

      {/* Footer Bottom: Rights Reserved and Social Media Icons */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-4">
        {/* Center-aligned Rights Reserved */}
        <p className="text-gray-600 text-center w-full md:w-auto">
          &copy; 2024 All Rights Reserved
        </p>

        {/* Right-aligned Social Media Icons */}
        <div className="flex space-x-4 md:ml-auto">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className=" p-2 border rounded-full text-black">
            <Facebook size={20} fill='black' />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className=" p-2 border rounded-full text-black">
            <Linkedin size={20} fill='black' />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=" p-2 border rounded-full text-black">
            <Twitter size={20} fill='black' />
          </a>
        </div>
      </div>
    </footer>
  );
}
