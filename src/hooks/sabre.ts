import { useEffect, useState } from "react"
import { fetchSabres } from "../api/fetch-sabres"
import { SabreResponse } from "../types/sabre";

export const useFetchSabre = () => {

    const [data, setData] = useState<SabreResponse[] | null>(null);
    const [error, setError] = useState<boolean | null>(null)
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchSabres()
        .then((data: SabreResponse[]) => setData(data))
        .catch(error => setError(error.message))
        .finally(() => setLoading(false))


        return () => {
            setData(null);
            setError(null);
            setLoading(true)
        }
    }, [])

    return { data, error, loading}
}