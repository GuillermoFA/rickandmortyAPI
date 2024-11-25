/* eslint-disable react/prop-types */
function CharacterCard({ character }) {
  let statusIcon;
  if (character.status === "Alive") {
    statusIcon = "🟢";
  } else if (character.status === "Dead") {
    statusIcon = "🔴";
  } else {
    statusIcon = "🔵";
  }

  return (
    <a className="flex flex-col items-center bg-gray-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={character.image}
        alt={character.name}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {character.name}
        </h5>
        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400 ">
          {statusIcon} {character.status} - {character.species}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Location: {character.location.name}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Origin: {character.origin.name}
        </p>
      </div>
    </a>
  );
}

export default CharacterCard;
