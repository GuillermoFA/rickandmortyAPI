import { useState } from "react";
import { useFetchCharacters } from "../hooks/useFetchCharacter";
import PaginationButtons from "../components/PaginationButtons";
import SearchInput from "../components/SearchInput";
import CharacterList from "../components/CharacterList";
import Loading from "../components/Loading";

function Home() {
  const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda
  const [page, setPage] = useState(1); // Página actual
  const { characters, isLoading, paginationInfo } = useFetchCharacters(
    page,
    searchTerm
  );

  const handleSearch = (term) => {
    setSearchTerm(term); // Actualizamos el término de búsqueda
    setPage(1); // Reinicia la paginación al buscar
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mt-4 w-full max-w-md">
        <PaginationButtons
          page={page}
          setPage={setPage}
          isLoading={isLoading}
          hasNext={!!paginationInfo.next}
          hasPrev={!!paginationInfo.prev}
        />
        <SearchInput searchTerm={searchTerm} onSearch={handleSearch} />
      </div>
      {isLoading ? <Loading /> : <CharacterList characters={characters} />}
    </div>
  );
}

export default Home;
