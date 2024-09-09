import { useState, useEffect } from "react";

export const useFetch = (endpoint) => {

    const [data, setData] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(endpoint);
                const data = await res.json();            
                setData(data);
            } catch (error) {
                console.error("Error!", error)
            }
        }

        fetchData()
    }, [endpoint]);
    
    return { data };
}