import { CAT_FACTS_API_URL, CATAAS_API_URL } from '../constants'
export const getFact = async () => {
  const response = await fetch(CAT_FACTS_API_URL)
  const { fact } = await response.json()
  return fact
}

export const getFactWithImage = async (threeFirstWords) => {
  const response = await fetch(`${CATAAS_API_URL}/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
  const { url } = await response.json()
  return url
}