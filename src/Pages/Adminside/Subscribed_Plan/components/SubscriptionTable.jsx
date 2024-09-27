import React, { useState } from 'react';

const data = [
  { id: 1, name: 'Subscription A', price: '$10', duration: '1 month', status: 'Active' },
  { id: 2, name: 'Subscription B', price: '$20', duration: '3 months', status: 'Expired' },
  { id: 3, name: 'Subscription C', price: '$30', duration: '6 months', status: 'Active' },
  { id: 4, name: 'Subscription D', price: '$40', duration: '12 months', status: 'Inactive' },
  { id: 5, name: 'Subscription E', price: '$50', duration: '1 year', status: 'Expired' },
  { id: 6, name: 'Subscription F', price: '$60', duration: '2 years', status: 'Active' },
  { id: 7, name: 'Subscription G', price: '$70', duration: '3 years', status: 'Inactive' },
  { id: 8, name: 'Subscription H', price: '$80', duration: '5 years', status: 'Expired' },
  // Add more rows as needed
];

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
    <div className="w-full p-6">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Duration</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row) => (
            <tr key={row.id} className="bg-white">
              <td className="border border-gray-300 px-4 py-2 text-center">{row.id}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{row.name}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{row.price}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{row.duration}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
