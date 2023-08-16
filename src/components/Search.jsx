import axios from "axios";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


export default function Search() {
    const [input, setInput] = useState("John")
    const [searchResult, setSearchResult] = useState([])

    const APIKEY = import.meta.env.VITE_API_KEY;
    const url = 'https://api.open.fec.gov/v1/names/candidates/?q=' + input + '&api_key=' + APIKEY;
    useEffect(() => {
        //url needs to take input as a variable 
        axios.get(url)
            .then((res) => {
                res.data && setSearchResult(res.data.results);
            })
            .catch((err) => {
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
    }, [url])

    let results = [
        {
            id: "P80001571",
            name: "TRUMP, DONALD J.",
            office_sought: "P"
        },
        {
            id: "H6AK00045",
            name: "YOUNG, DONALD E",
            office_sought: "H"
        },
        {
            id: "H6NE02125",
            name: "BACON, DONALD J",
            office_sought: "H"
        },
        {
            id: "S0OK00107",
            name: "NICKLES, DONALD LEE",
            office_sought: "S"
        },
        {
            id: "H4VA08224",
            name: "BEYER, DONALD STERNOFF JR.",
            office_sought: "P"
        },
        {
            id: "H4NJ01084",
            name: "NORCROSS, DONALD W",
            office_sought: "H"
        }
    ]
    function handleInputChange(e) {
        const searchInput = e.target.value;
        setInput(searchInput)
    }

    function handleSubmit(e) {
        e.preventDefault();

    }
    return (
        <div className="grid  p-2 place-content-center">
            <form className="" onSubmit={handleSubmit}>
                <label className="appearance-none shadow-lg " name="search">
                    <input
                        className="outline-none w-80 mb-10 bg-white border-black border-2 rounded-md hover:ring hover:ring-gray-500 focus:ring focus:ring-gray-300 focus:placeholder-transparent"
                        type="text"
                        value={input}
                        placeholder=" name, id... "
                        onChange={handleInputChange}
                    />
                </label>
            </form>
            <div className="border-2 bg-gray-200 border-black h-96 w-80 rounded-md shadow-lg">
                <div className="h-full p-2 rounded-md">
                    <ul className="">
                        {searchResult.length == 0 && <div>No results</div>}
                        {searchResult.filter(cand => {
                            return cand.office_sought === "P"
                        }).map(p => {
                            return (
                                <li key={p.id} className="text-sm border-2 m-2 bg-white border-black rounded-md hover:bg-slate-950 hover:text-white hover:cursor-pointer active:ring hover:ring-gray-500">
                                    <Link to={`/candidate/${p.id}`} candId={p.id}>
                                        <div className="pl-2 font-semibold"> {p.name}</div>
                                        <div className="pl-2">Candidate ID: {p.id}</div>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
