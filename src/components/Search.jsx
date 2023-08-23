import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import LoadingSpinner from "./LoadingSpinner";
import useDebounce from "../hooks/useDebounce";
import useFetch from "../hooks/useFetch";


export default function Search() {
    const [input, setInput] = useState("")
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredResult, setFilteredResult] = useState([]);
    const [isEnterPressed, setIsEnterPressed] = useState(false);
    const APIKEY = import.meta.env.VITE_API_KEY;
    const debouncedSearchTerm = useDebounce(searchTerm, 600);
    const url =
        searchTerm ?
            'https://api.open.fec.gov/v1/names/candidates/?q='
            + debouncedSearchTerm
            + '&api_key='
            + APIKEY
            : null;
    const { data, isLoading, error } = useFetch(url);

    useEffect(() => {
        if (data && data.length > 0) {
            setFilteredResult(data.filter((cand) => cand.office_sought === "P"));
        } else {
            setFilteredResult([]);
        }
    }, [data])

    function handleInput(e) {
        setInput(e.target.value)
    }

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            setSearchTerm(input)
            setIsEnterPressed(true)
        }
    }

    return (
        <div className="grid  p-2 place-content-center">
            <SearchInput handleInput={handleInput} handleKeyDown={handleKeyDown} input={input}/>
            <div className=" bg-gray-200  h-96 w-80 rounded-md shadow-lg">
                <div className="h-full p-2 rounded-md">
                    <ul className="">
                        {isLoading ? <LoadingSpinner /> : <div>
                            {filteredResult.length === 0 && isEnterPressed && (<div>No results</div>)}
                            {filteredResult.map(({ id, name }) => {
                                return (
                                    <SearchListItem key={id} candId={id} candName={name} />
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
function SearchListItem({ candId, candName }) {
    return (
        <li className="text-sm  m-2 shadow-md text-white bg-zinc-900 border-black rounded-md hover:bg-zinc-700 hover:text-white hover:cursor-pointer active:ring hover:ring-1 hover:ring-gray-500">
            <Link to={`/candidate/${candId}`} >
                <div className="pl-2 font-semibold"> {candName}</div>
                <div className="pl-2">Candidate ID: {candId}</div>
            </Link>
        </li>
    )
}

function SearchInput({input, handleInput, handleKeyDown}) {
    return (
        <input
        className="outline-none w-80 mb-10 text-white bg-zinc-900 text-center hover:bg-zinc-600 placeholder:text-white rounded-md active:ring-gray-400 focus:ring focus:ring-gray-300 focus:placeholder-transparent"
        type="text"
        value={input}
        placeholder=" Search by name"
        onChange={handleInput}
        onKeyDown={handleKeyDown}
    />
    )
}