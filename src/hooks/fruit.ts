import { useEffect, useState } from "react"
import { FruitsResponse } from "../types/fruit"
import { fetchFruits } from "../api/fetch-fruits";

export const useFetchFruit = () => {
    const [data, setData] = useState<FruitsResponse[] |null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        console.log("cc");
        fetchFruits()
        .then(data => setData(data))
        .catch(e => setError(e.message))
        .finally(() => setLoading(false))

        return () => {
            setData(null);
            setError(null);
            setLoading(true)
        }

    },[])

    return { data, error, loading };
}