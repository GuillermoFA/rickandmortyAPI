/* eslint-disable react/prop-types */
function CharacterDetail({ label, value }) {
  return (
    <p className="mb-3 font-normal text-gray-400 dark:text-gray-500">
      {label}:{" "}
      <span className="text-gray-900 dark:text-white font-medium">{value}</span>
    </p>
  );
}

export default CharacterDetail;
