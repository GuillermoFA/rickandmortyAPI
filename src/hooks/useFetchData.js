import { useEffect, useState } from "react";

function useFetchData(apiFunction = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await apiFunction();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [apiFunction]);

  return { data, loading, error };
}

export default useFetchData;
