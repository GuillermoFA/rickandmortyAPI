/* eslint-disable react/prop-types */
function PaginationButtons({ page, setPage, isLoading, hasNext, hasPrev }) {
  return (
    <div className="flex space-x-2">
      <button
        className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50 hover:bg-gray-700"
        disabled={!hasPrev || isLoading}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <button
        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 disabled:opacity-50"
        disabled={!hasNext || isLoading}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default PaginationButtons;
