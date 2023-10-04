import React, { useState } from "react";
import product_data from "../data/prodData";
import Searchbar from "./Searchbar";
import ProductCard from "./ProductCard";
import Paginate from "./Paginate";
const Product = () => {
  const [filteredData, setFilteredData] = useState(product_data);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(6);

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.isArray(filteredData)
    ? filteredData.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };
  const handleSearchData = (data) => {
    setFilteredData(data);
  };

  const totalPages = 10;

  return (
    <div className="flex flex-col items-center bg-sky-100  font-semibold">
      <div className=" bg-sky-100 rounded-xl">
        <div className="flex flex-col items-center mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {currentItems.length > 0 && <Searchbar onSearch={handleSearchData} />}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 ">
            {currentItems.length > 0 ? (
              currentItems.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p>No Cars Available</p>
            )}
          </div>
          <div className="mt-2">
            {currentItems.length > 0 && (
              <Paginate
                totalPages={totalPages}
                handlePageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
