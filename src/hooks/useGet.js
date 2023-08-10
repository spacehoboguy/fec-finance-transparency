import { useState, useEffect } from 'react';
import axios from 'axios';

function useGet(url, apiKey) {
  const [data, setData] = useState([]);
  
  useEffect(() => {
      const controller = new AbortController();

      axios.get(url + apiKey ,{ signal: controller.signal })
      .then(res => {
          res.data && setData(res.data);
      })
      .catch(err => {
          console.log("Error:", err)
      })
      return () => {
        controller.abort();
      }
  }, [])

  return { data }
}
export default useGet;
