import { Icon } from "@tremor/react"
import { useState } from "react"

export default function Search() {
    const [input, setInput] = useState("")

    function handleInputChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit() {

    }
    return (
        <div className="grid p-2 place-content-center">
            <form className="appearance-none">
                <label className="appearance-none">
                    <input
                        className="outline-none border-black border-2 rounded-md focus:ring focus:ring-gray-300 focus:placeholder-transparent"
                        type="text"
                        placeholder=" name, id... "
                        onChange={handleInputChange}
                        onSubmit={handleSubmit} />
                </label>
            </form>
        </div>
    )
}
