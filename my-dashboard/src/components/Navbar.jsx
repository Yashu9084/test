const Navbar = () => {
  return (
    <div className="w-full bg-gray-100 p-4 shadow-md flex items-center justify-between">
      {/* Search Section (75% Width) */}
      <div className="w-3/4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Search..."
        />
      </div>

      {/* Filter and Export Section (25% Width) */}
      <div className="w-1/4 flex justify-end space-x-4">
        {/* Filter Button */}
        <button className="bg-gray-300 p-2 rounded-md hover:bg-gray-400">
          Filter
        </button>

        {/* Export Button */}
        <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Export
        </button>
      </div>
    </div>
  );
};

export default Navbar;
