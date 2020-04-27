import React, { useState, Fragment } from "react";
import { paginate } from "./Pagination/paginate";
import Pros from "./Pros";
import Pagination from "./Pagination/Pagination";

const Pro = ({ pros }) => {
  const [perPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const archiveCourses = paginate(pros, currentPage, perPage);
  console.log(pros.length);
  return (
    <Fragment>
      <Pros archive={archiveCourses} />

      <Pagination
        totalPros={pros.length}
        currentPage={currentPage}
        perPage={perPage}
        onPageChange={handlePageChange}
      />
    </Fragment>
  );
};

export default Pro;
