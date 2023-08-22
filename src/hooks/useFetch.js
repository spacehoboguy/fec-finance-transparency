import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const controller = new AbortController();
  
  useEffect(() => {
    console.log('fetched')
    setIsLoading(true)
    axios
      .get(url, {
        signal: controller.signal
      })
      .then((res) => {
        setIsLoading(false)
        res.data && setData(res.data.results);
      })
      .catch((err) => {
        setIsLoading(false)

        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else if (err.request) {
          console.log(err.request);
        } else {
          setError(err.message)
          console.log('Error', err.message);
        }
      })

    return () => {
      controller.abort();
    }
  }, [url])
  return { data, isLoading, error }
}
export default useFetch;
