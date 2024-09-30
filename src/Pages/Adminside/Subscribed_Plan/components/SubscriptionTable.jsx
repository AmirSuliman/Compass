import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import data from './data'; // Importing data from data.js

export default function SubscriptionTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Get current rows based on the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="w-full p-2">
      <h1 className='mb-8 mt-8 text-3xl text-[#1D1D2E] font-semibold'>Subscription Details </h1>
      {/* Added overflow-x-auto for horizontal scrolling */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full min-w-[640px]"> {/* Added min-w to ensure proper width */}
          <thead>
            <tr className="bg-[#1D70FA]">
              <th className="border-b border-gray-300 text-white px-4 py-2 whitespace-nowrap rounded-tl xl:rounded-tl-2xl">User Name</th>
              <th className="border-b border-gray-300 text-white px-4 py-2 whitespace-nowrap">Phone Number</th>
              <th className="border-b border-gray-300 text-white px-4 py-2 whitespace-nowrap">Subscription Tier</th>
              <th className="border-b border-gray-300 text-white px-4 py-2 whitespace-nowrap">Subscription ID</th>
              <th className="border-b border-gray-300 text-white px-4 py-2 whitespace-nowrap">Features</th>
              <th className="border-b border-gray-300 text-white px-4 py-2 whitespace-nowrap">Upcoming Renewals</th>
              <th className="border-b border-gray-300 text-white px-4 py-2 whitespace-nowrap rounded-tr xl:rounded-tr-2xl">Amount</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row) => (
              <tr key={row.id} className="bg-white">
                <td className="border-b border-gray-300 px-4 py-2 flex items-center space-x-2 whitespace-nowrap">
                  <img src={row.avatar} alt="avatar" className="w-9 h-9 rounded-full" />
                  <span className="font-medium">{row.name}</span>
                </td>
                <td className="border-b border-gray-300 px-4 py-2 text-center">{row.phone}</td>
                <td className="border-b border-gray-300 px-4 py-2 text-center">{row.tier}</td>
                <td className="border-b border-gray-300 px-4 py-2 text-center">{row.subscriptionId}</td>
                <td className="border-b border-gray-300 px-4 py-2 text-center whitespace-nowrap">{row.features}</td> {/* Prevent wrapping */}
                <td className="border-b border-gray-300 px-4 py-2 text-center">{row.upcomingRenewals}</td>
                <td className="border-b border-gray-300 px-4 py-2 text-center">{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div className="flex justify-left items-center mt-4 space-x-2">
        {/* Previous Page Button */}
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-1 py-1 text-[black] rounded-full bg-gray-500 disabled:opacity-50"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded-full ${
              currentPage === index + 1 ? 'bg-[#CEE1FD] border border-[#3180F5] text-[#3180F5]' : 'bg-gray-300 text-gray-700'
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Page Button */}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-1 py-1 text-black bg-gray-500 rounded-full disabled:opacity-50"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
