import { useState, useEffect } from "react";

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async (url: string) => {
      try {
        setData(null);
        setIsLoading(true);
        setError(null);
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Network Error, status: ${response.status}!`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("Unexpected Error!"));
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (!url) {
      return;
    }

    fetchData(url);

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;