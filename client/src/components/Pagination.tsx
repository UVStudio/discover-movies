import React from 'react';

export const Pagination = ({
  moviesPerPage,
  totalMovies,
  paginate,
}: {
  moviesPerPage: number;
  totalMovies: number;
  paginate: any;
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                className="page-link"
                href="/#"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
