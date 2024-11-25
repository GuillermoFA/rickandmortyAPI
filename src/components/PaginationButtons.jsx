/* eslint-disable react/prop-types */
import Button from "./Button";

function PaginationButtons({ page, setPage, isLoading }) {
  return (
    <div className="flex space-x-2">
      <Button
        label="Previous"
        onClick={() => setPage(page - 1)}
        disabled={page === 1 || isLoading}
      />
      <Button
        label="Next"
        onClick={() => setPage(page + 1)}
        disabled={isLoading}
      />
    </div>
  );
}

export default PaginationButtons;
