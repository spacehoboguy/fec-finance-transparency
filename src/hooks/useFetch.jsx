import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useFetch(url) {
  const [data, setData] = useState([])
  const endpoint = url + import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const controller = new AbortController();
    axios.get(endpoint, {
      signal: controller.signal
    })
      .then((response) => setData(response.data))
      .catch((err) => console.error("Axios error:", err))

    return () => {
      controller.abort()
    }
  }, []) //fetches only on initial load
  return { data }
}


