const Previouscontent = () => {
    return (
      <div className="bg-white p-4 border mt-4 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-800">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Previous Campaigns</h1>
        <table className="min-w-full table-auto border-collapse mt-4">
          <thead>
            <tr className="text-gray-700 text-sm font-semibold">
              <th className="p-4 text-left border-b dark:border-gray-600">
                Content
              </th>
              <th className="p-4 text-left border-b dark:border-gray-600">
                Date
              </th>
              <th className="p-4 text-left border-b dark:border-gray-600">
                Level of achievement
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-800 dark:hover:bg-gray-700 text-[13px]">
              <td className="p-4 text-gray-900 dark:text-gray-200 border-b dark:border-gray-600">Campaign 1</td>
              <td className="p-4 text-gray-900 dark:text-gray-200 border-b dark:border-gray-600">01/10/2024</td>
              <td className="p-4 text-gray-900 dark:text-gray-200 border-b dark:border-gray-600">459/1.200 visits</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800  dark:hover:bg-gray-700 text-[13px]">
              <td className="p-4 text-gray-900  border-b dark:border-gray-600">Campaign 2</td>
              <td className="p-4 text-gray-900  border-b dark:border-gray-600">15/09/2024</td>
              <td className="p-4 text-gray-900  border-b dark:border-gray-600">459/1.200 visits</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Previouscontent;
  