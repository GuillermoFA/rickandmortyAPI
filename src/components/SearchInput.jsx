/* eslint-disable react/prop-types */
function SearchInput({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by name..."
      className="px-4 py-2 border rounded w-full max-w-md"
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchInput;
