const API_URL = "https://rickandmortyapi.com/api/character";

export const getAllCharacters = async (page = 1) => {
  try {
    const response = await fetch(`${API_URL}?page=${page}`);
    if (!response.ok) {
      throw new Error("Error fetching characters");
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error.message);
    return { results: [], error: error.message };
  }
};
