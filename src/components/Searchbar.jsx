import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import product_data from "../data/prodData";

const Searchbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter the data based on the search query in real-time
    const filteredData = product_data.filter(
      (item) =>
        item.category?.toLowerCase().includes(query.toLowerCase()) ||
        item.title?.toLowerCase().includes(query.toLowerCase())
    );

    onSearch(filteredData);
  };

  return (
    <div className="flex items-center p-2 space-x-6 rounded-xl drop-shadow-lg my-5">
      <div className="flex bg-gray-100 p-2 w-62 space-x-4 rounded-lg">
        <FaSearch className="h-6 w-6 opacity-30" />
        <input
          className="bg-gray-100 outline-none"
          type="text"
          placeholder="Type to search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
    </div>
  );
};

export default Searchbar;
