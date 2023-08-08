import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState()
  const VITE_FEC_API_KEY = "UPzWEOVhYptFM46107HjwT0OXVrtDYg9HEYFDwMJ"
  const endpoint = 'https://api.open.fec.gov/v1/candidates/?candidate_id=P80001571&page=1&api_key=' + VITE_FEC_API_KEY;
 
  useEffect(()=>{
    const controller = new AbortController();
    axios.get(endpoint, {
      signal: controller.signal
    })
    .then((response) => setData(response.data))
    .catch((err)=> console.error("Axios .get() error:", err))
   
    return ()=> {
      controller.abort()
    }
  },[])
  console.log(data)

  return (
    <>
      <h1 className="">Hello world</h1>
    </>
  )
}

export default App
