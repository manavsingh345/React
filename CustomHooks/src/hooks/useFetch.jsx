import { useState, useEffect } from 'react'

export function useFetch(url) {
    const [finalData, setFinalData] = useState({});
    const [Loading, setLoading] = useState(true);
    
    async function FinalPost() {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);
        setLoading(false);
    }

    useEffect(() => {
        FinalPost();
    }, [url]);

    return {
        finalData,
        Loading
    }
}