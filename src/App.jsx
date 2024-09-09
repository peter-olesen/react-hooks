import { useState } from "react";

import { useFetch } from './hooks/useFetch'
// import { useImages } from './hooks/useImages'

import './App.css'

function App() {
  const [endpoint, setEndpoint] = useState('https://uselessfacts.jsph.pl/api/v2/facts/random');
  const { data } = useFetch(endpoint);
  console.log(data);
  

  return (
    <>
      {/* <p>I'm so happy, as happy as can be!</p> */}
      {data ? <h1 key={data.id}>{data.text}</h1> : <p>Loading...</p>}
    </>
  )
}

export default App
