import { useState, useEffect } from "react";

const API_URL = "https://rickandmortyapi.com/api/character";

export const useFetchCharacters = (page, searchTerm) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [paginationInfo, setPaginationInfo] = useState({
    next: null,
    prev: null,
  });

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      try {
        let url = `${API_URL}?page=${page}`;
        if (searchTerm) {
          url = `${API_URL}?name=${searchTerm}&page=${page}`;
        }
        const response = await fetch(url);
        if (!response.ok) {
          if (response.status === 404) {
            setCharacters([]);
            setPaginationInfo({ next: null, prev: null });
          } else {
            throw new Error("Error fetching characters");
          }
        } else {
          const data = await response.json();
          setCharacters(data.results || []);
          setPaginationInfo({ next: data.info.next, prev: data.info.prev });
        }
      } catch (error) {
        console.error("Error:", error.message);
        setCharacters([]);
        setPaginationInfo({ next: null, prev: null });
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [page, searchTerm]);

  return { characters, isLoading, paginationInfo };
};
