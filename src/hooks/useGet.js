import { useState, useEffect } from 'react';
import axios from 'axios';

function useGet(url) {
  const [data, setData] = useState([]);
  const APIKEY = import.meta.env.VITE_API_KEY;
  
  useEffect(() => {
      const controller = new AbortController();

      axios.get(url + APIKEY, { 
        signal: controller.signal })
      .then(res => {
          res.data && setData(res.data);
      })
      .catch(err => {
          console.log("Error:", err)
      })
      return () => {
        controller.abort();
      }
  }, [url])

  return { data }
}
export default useGet;
