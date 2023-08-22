import { useEffect, useState } from 'react'
import { CAT_FACTS_API_URL, CATAAS_API_URL } from './constants'
import { getFact, getFactWithImage } from './services/facts'
import './App.css'

function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    const performQuery = async () => {
      const fact = await getFact()
      setFact(fact)
    }
    performQuery()
  }, [])

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    getFactWithImage(threeFirstWords)
      .then(url => setImageUrl(url))
  }, [fact])

  const handleClick = async () => {
    const newFact = await getFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>Fun Facts for Cats</h1>
      <button onClick={handleClick}>New Fact</button>
      { fact && <p>{fact}</p> }
      { imageUrl && <img src={`${CATAAS_API_URL}${imageUrl}`} alt={`Fun facts extracted using these keyword ${fact}`} /> }
    </main>
  )
}

export default App
