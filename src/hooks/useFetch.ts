import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Country, FetchResponse } from "../types";

export default function useFetch(url: string): FetchResponse {
  const [data, setData] = useState<Country[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<Country[]>(url)
      .then((res: AxiosResponse<Country[]>) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [url]);

  function refetch() {
    setIsLoading(true);
    axios
      .get<Country[]>(url)
      .then((res: AxiosResponse<Country[]>) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }

  return { isLoading, error, data, refetch };
}
