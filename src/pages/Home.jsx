import { useState } from "react";
import { useFetchCharacters } from "../hooks/useFetchCharacter"; // Importar el hook
import PaginationButtons from "../components/PaginationButtons";
import SearchInput from "../components/SearchInput";
import CharacterList from "../components/CharacterList";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const { characters, isLoading } = useFetchCharacters(page);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mt-4 w-full max-w-md">
        <PaginationButtons
          page={page}
          setPage={setPage}
          isLoading={isLoading}
        />
        <SearchInput searchTerm={searchTerm} onSearch={handleSearch} />
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <CharacterList characters={filteredCharacters} />
      )}
    </div>
  );
}

export default Home;
