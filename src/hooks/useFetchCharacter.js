import { useState, useEffect } from "react";
import { getAllCharacters } from "../api/api";

export function useFetchCharacters(page) {
  const [characters, setCharacters] = useState([]);
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

  return { characters, isLoading };
}
