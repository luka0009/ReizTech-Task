import { PaginationProps } from "../types";

const Pagination = ({
  totalCountries,
  countriesPerPage,
  setCurrentPage,
  currentPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalCountries! / countriesPerPage);

  let startPage = 1;
  let endPage = totalPages;
  if (currentPage <= 3) {
    endPage = 4;
  } else if (currentPage >= totalPages - 2) {
    startPage = totalPages - 3;
  } else {
    startPage = currentPage - 2;
    endPage = currentPage + 2;
  }

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <div className="flex flex-wrap justify-center mt-1">
      <button
        disabled={currentPage === 1}
        className="mx-2 disabled:cursor-not-allowed"
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        {"<"}
      </button>
      <button
        className={`w-6 h-6 font-semibold text-sm rounded-md cursor-pointer
        transition-all duration-300 bg-transparent text-gray-900 
        border border-gray-200 ${
          currentPage === 1 &&
          "font-extrabold border-yellow-900 bg-yellow-400 text-gray-900"
        }`}
        onClick={() => setCurrentPage(1)}
      >
        1
      </button>
      {startPage > 2 && <span className="text-gray-900 mx-1">...</span>}
      {pages.map((page, index) => {
        if (page === 1 || page === totalPages) {
          return;
        }
        return (
          <button
            className={`w-6 h-6 font-semibold text-sm rounded-md cursor-pointer
                         transition-all duration-300 bg-transparent text-gray-900 
                         border border-gray-200 ${
                           page === currentPage &&
                           "font-extrabold border-yellow-900 bg-yellow-400 text-gray-900"
                         }`}
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
      {endPage < totalPages - 1 && (
        <span className="text-gray-900 mx-1">...</span>
      )}
      <button
        className={`w-6 h-6 font-semibold text-sm rounded-md cursor-pointer
        transition-all duration-300 bg-transparent text-gray-900 
        border border-gray-200 ${
          currentPage === 63 &&
          "font-extrabold border-yellow-900 bg-yellow-400 text-gray-900"
        }`}
        onClick={() => setCurrentPage(totalPages)}
      >
        {totalPages}
      </button>
      <button
        disabled={currentPage === totalPages}
        className="mx-2 disabled:cursor-not-allowed"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
