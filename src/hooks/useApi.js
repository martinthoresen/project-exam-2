import { useState, useEffect } from "react";
import { loadKey } from "../storage/localStorage";

/**
 * An API Hook which makes the process of handling API calls more convenient
 */

function useApi(url, method, body) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const token = loadKey("accessToken");
        const headerData = {
          method: method,
          headers: {
            Authorization: `Bearer ${token}`,
            body,
          },
        };
        const fetchedData = await fetch(url, headerData);
        const json = await fetchedData.json();
        setData(json);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url, method, body]);
  return { data, isLoading, isError };
}

export default useApi;
