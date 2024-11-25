/* eslint-disable react/prop-types */
function Button({ label, onClick, disabled, className }) {
  return (
    <button
      className={`px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 disabled:opacity-50 ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
