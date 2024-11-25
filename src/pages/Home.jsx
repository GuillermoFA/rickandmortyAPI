import { useState, useEffect } from "react";
import { getAllCharacters } from "../api/api.js";
import CharacterCard from "../components/CharacterCard";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      const data = await getAllCharacters(page);
      setCharacters(data.results || []);
      setIsLoading(false);
    };

    fetchCharacters();
  }, [page]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mt-4 w-full max-w-md">
        <div className="flex space-x-2">
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50 hover:bg-gray-700"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 disabled:opacity-50"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search by name..."
            className="px-4 py-2 border rounded w-full max-w-md"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {filteredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
