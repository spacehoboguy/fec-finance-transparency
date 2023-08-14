function fetchApi() {
    const [data, setData] = useState()

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
}