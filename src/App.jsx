import { useState, useEffect } from 'react'
import axios from 'axios'



function App() {
  const [data, setData] = useState()
  const endpoint = 'https://api.open.fec.gov/v1/presidential/financial_summary/?page=1&per_page=20&candidate_id=P80001571&sort=-net_receipts&sort_hide_null=false&sort_null_only=false&sort_nulls_last=false&api_key=' + import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const controller = new AbortController();
    axios.get(endpoint, {
      signal: controller.signal
    })
      .then((response) => setData(response.data))
      .catch((err) => console.error("Axios error:", err))
    console.log(data.results)

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <>
      <h1 className="">Hello world</h1>
    </>
  )
}

export default App
