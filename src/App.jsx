import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState()
  const VITE_FEC_API_KEY = "UPzWEOVhYptFM46107HjwT0OXVrtDYg9HEYFDwMJ"
  const endpoint = 'https://api.open.fec.gov/v1/presidential/financial_summary/?page=1&per_page=20&candidate_id=P80001571&sort=-net_receipts&sort_hide_null=false&sort_null_only=false&sort_nulls_last=false&api_key=' + VITE_FEC_API_KEY;
 
  useEffect(()=>{
    const controller = new AbortController();
    axios.get(endpoint, {
      signal: controller.signal
    })
    .then((response) => setData(response.data))
    .catch((err)=> console.error("This is the '.get()' error:", err))
   
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
