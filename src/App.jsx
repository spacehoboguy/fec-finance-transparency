import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState()
  const VITE_FEC_API_KEY = "UPzWEOVhYptFM46107HjwT0OXVrtDYg9HEYFDwMJ"
  const endpoint = 'https://api.open.fec.gov/v1/candidates/?party=DEM&api_key=' + VITE_FEC_API_KEY;
 
  console.log(endpoint)
  useEffect(()=>{
    axios.get(endpoint)
    .then((response) => setData(response.data))
    console.log(data)
  },[])

  return (
    <>
      <h1 className="">Hello world</h1>
    </>
  )
}

export default App
