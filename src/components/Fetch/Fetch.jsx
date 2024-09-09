import { useState, useEffect } from "react";
import { useFetch } from '../../hooks/useFetch'

export const Fetch = () => {
    const [endpoint, setEndpoint] = useState('https://uselessfacts.jsph.pl/api/v2/facts/random');
    const { data } = useFetch(endpoint);
    // console.log(data);

    return (
        <>
            {data ? <h1 key={data.id}>{data.text}</h1> : <p>Loading...</p>}
        </>
    )
}


