import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import LoadingSpinner from "./LoadingSpinner";
import useDebounce from "../hooks/useDebounce";
import useFetch from "../hooks/useFetch";


export default function Search() {
    const [input, setInput] = useState("")
    const debouncedSearchValue = useDebounce(input, 600);
    const APIKEY = import.meta.env.VITE_API_KEY;
    const url = 'https://api.open.fec.gov/v1/names/candidates/?q=' + debouncedSearchValue + '&api_key=' + APIKEY;
    const [filteredResult, setFilteredResult] = useState([]);
    const { data, isLoading, error } = useFetch(url);

    useEffect(() => {
        setFilteredResult(data.filter(cand => {
            return cand.office_sought === "P";
        }))
    }, [data])

    return (
        <div className="grid  p-2 place-content-center">
            <input
                className="outline-none w-80 mb-10 bg-white border-black border-2 rounded-md hover:ring hover:ring-gray-300 active:ring-gray-400 focus:ring focus:ring-gray-300 focus:placeholder-transparent"
                type="text"
                value={input}
                placeholder=" Search by name"
                onChange={(e) => setInput(e.target.value)}
            />
            <div className="border-2 bg-gray-200 border-black h-96 w-80 rounded-md shadow-lg">
                <div className="h-full p-2 rounded-md">
                    <ul className="">
                        {isLoading ? <LoadingSpinner /> : <div>
                            {filteredResult.length == 0 && <div>No results</div>}
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

import React from 'react'

function SearchListItem({ candId, candName }) {
    return (
        <li className="text-sm border-2 m-2 bg-white border-black rounded-md hover:bg-slate-950 hover:text-white hover:cursor-pointer active:ring hover:ring-gray-500">
            <Link to={`/candidate/${candId}`} candId={candId}>
                <div className="pl-2 font-semibold"> {candName}</div>
                <div className="pl-2">Candidate ID: {candId}</div>
            </Link>
        </li>
    )
}
