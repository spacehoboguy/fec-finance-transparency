import { useState, useRef } from "react"
import useGet from "../hooks/useGet"

export default function Search() {
    const [input, setInput] = useState()

    function handleInputChange(e) {
        setInput(e.target.value)
        console.log(e.target.value)
    }

    function handleSubmit(e) {

    }
    
    return (
        <div className="grid p-2 place-content-center">
            <form className="flex items-center" onSubmit={handleSubmit}>
                <label className="appearance-none">
                    <input
                        className="outline-none border-black border-2 rounded-md focus:ring focus:ring-gray-300 focus:placeholder-transparent"
                        type="text"
                        placeholder=" name, id... "
                        onChange={handleInputChange}
                        />
                </label>
            </form>
        </div>
    )
}
