import React from "react";

const Pagination = ({ tutoPerPage, totalTutorials, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTutorials / tutoPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination_list">
        {pageNumbers.map((number) => (
          <li key={number} onClick={() => paginate(number)}>
            <span>{number}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
