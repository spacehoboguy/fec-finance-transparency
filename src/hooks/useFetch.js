import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const controller = new AbortController();
  
  useEffect(() => {
    if(!url) {
      setIsLoading(false)
      return;
    }
    console.log('fetched') // console log
    
    setIsLoading(true)
    axios
      .get(url, {
        signal: controller.signal
      })
      .then((res) => {
        setIsLoading(false);
        if (!controller.signal.aborted) {
          setData(res.data.results);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        if (controller.signal.aborted) {
          setError(err);
        }
      })

    return () => {
      controller.abort();
    }
  }, [url])
  return { data, isLoading, error }
}
export default useFetch;
