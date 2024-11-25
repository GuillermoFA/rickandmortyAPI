/* eslint-disable react/prop-types */
import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterList;
