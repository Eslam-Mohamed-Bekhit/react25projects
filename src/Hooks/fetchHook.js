import React, { useState, useEffect } from 'react';

const useFetch = (url, opt = {}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true)
            console.log(url)
            const response = await fetch(url, opt);
            if (!response.ok) throw new Error(response.statusText)
            const dataJson = await response.json();
            console.log(dataJson)
            if (dataJson) {
                setData(dataJson);
                setLoading(false);
                setError(null)
            }
            setLoading(false);
        } catch (err) {
            setLoading(false)
            setError(err.message)
        }
    }


    useEffect(
        () => { fetchData() }
        , [url]
    )

    return [data, loading, error]

}
export default useFetch;