const API_URL = "https://rickandmortyapi.com/api";

export const getAllCharacters = async (page = 1) => {
  try {
    const response = await fetch(`${API_URL}/character?page=${page}`);
    if (!response.ok) {
      throw new Error("Error fetching characters");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return { results: [], error: error.message };
  }
};
