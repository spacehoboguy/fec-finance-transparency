import axios from "axios";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import LoadingSpinner from "./LoadingSpinner";
import useDebounce from "../hooks/useDebounce";


export default function Search() {
    const [input, setInput] = useState("")
    const debouncedSearchValue = useDebounce(input, 500)
    const [searchResult, setSearchResult] = useState([])
    const [filteredResult, setFilteredResult] = useState([])
    //const [status, setStatus] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const APIKEY = import.meta.env.VITE_API_KEY;
    const url = 'https://api.open.fec.gov/v1/names/candidates/?q=' + debouncedSearchValue + '&api_key=' + APIKEY;
    const controller = new AbortController();

    useEffect(() => {
        setIsLoading(true)
        axios.get(url, {
            signal: controller.signal
        }).then((res) => {
            setIsLoading(false)
            res.data && setSearchResult(res.data.results);
            setFilteredResult(searchResult.filter(cand => {
                    return cand.office_sought === "P"})
                )
        }).catch((err) => {
            setIsLoading(false)

            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else if (err.request) {
                console.log(err.request);
            } else {
                console.log('Error', err.message);
            }
        })
        return () => {
            controller.abort();
        }
    }, [url])
    
    
    function handleInputChange(e) {
        let searchTerm = e.target.value;
        setInput(searchTerm)
    }

    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <div className="grid  p-2 place-content-center">
            <form className="" onSubmit={handleSubmit}>
                <label className="appearance-none shadow-lg " name="search">
                    <input
                        className="outline-none w-80 mb-10 bg-white border-black border-2 rounded-md hover:ring hover:ring-gray-300 active:ring-gray-400 focus:ring focus:ring-gray-300 focus:placeholder-transparent"
                        type="text"
                        value={input}
                        placeholder=" Search by name"
                        onChange={handleInputChange}
                    />
                </label>
            </form>
            <div className="border-2 bg-gray-200 border-black h-96 w-80 rounded-md shadow-lg">
                <div className="h-full p-2 rounded-md">
                    <ul className="">
                        {isLoading ? <LoadingSpinner /> : <div>
                        {filteredResult.length == 0 && <div>No results</div>}
                            {filteredResult.map(p => {
                                return (
                                    <li key={p.id} className="text-sm border-2 m-2 bg-white border-black rounded-md hover:bg-slate-950 hover:text-white hover:cursor-pointer active:ring hover:ring-gray-500">
                                        <Link to={`/candidate/${p.id}`} candId={p.id}>
                                            <div className="pl-2 font-semibold"> {p.name}</div>
                                            <div className="pl-2">Candidate ID: {p.id}</div>
                                        </Link>
                                    </li>
                                )
                            })
                            }
                        </div>}
                    </ul>
                </div>
            </div>
        </div>
    )
}
