import React from "react";
import ReactPaginate from "react-paginate";

const Paginate = ({ totalPages, handlePageChange }) => {
  return (
    <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageChange}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}
      className={
        "flex gap-4 m-8 pagination bg-sky-50 p-2 rounded-xl drop-shadow-lg "
      }
    />
  );
};

export default Paginate;
