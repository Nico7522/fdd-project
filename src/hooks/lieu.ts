import { useEffect, useState } from "react";
import { LieuResponse } from "../types/lieu";
import { fetchLieux } from "../api/fetch-lieu";

export const usefetchLieu = () => {
  const [data, setData] = useState<LieuResponse[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLieux()
      .then((data) => setData(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return {
    data,
    loading,
    error,
  };
};
