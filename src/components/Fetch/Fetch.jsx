import { useFetch } from '../../hooks/useFetch'

export const Fetch = ({endpoint}) => {
    const { data } = useFetch(endpoint);
    // console.log(data);

    return (
        <>
            {data ? <h1 key={data.id}>{data.text}</h1> : <p>Loading...</p>}
        </>
    )
}


