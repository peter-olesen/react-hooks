import { Fetch } from './components/Fetch/Fetch'
import { Gallery } from './components/Gallery/Gallery'

import './App.scss'

function App() { 

  return (
    <>
      <Fetch endpoint="https://uselessfacts.jsph.pl/api/v2/facts/random" />
      <Gallery />
    </>
  )
}

export default App
