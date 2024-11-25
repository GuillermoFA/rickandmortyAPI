/* eslint-disable react/prop-types */
import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  if (characters.length === 0) {
    return <p>No characters found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterList;
