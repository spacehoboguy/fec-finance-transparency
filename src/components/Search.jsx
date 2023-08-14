import { Icon } from "@tremor/react"
import { useState } from "react"
import { HiOutlineInformationCircle } from "react-icons/hi2"

export default function Search() {
    const [input, setInput] = useState("")

    function handleInputChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit() {

    }
    return (
        <div className="grid p-2 place-content-center">
            <form className="flex items-center">
                <label className="appearance-none">
                    <input
                        className="outline-none border-black border-2 rounded-md focus:ring focus:ring-gray-300 focus:placeholder-transparent"
                        type="text"
                        placeholder=" name, id... "
                        onChange={handleInputChange}
                        onSubmit={handleSubmit}/>
                {/* <Icon className=""icon={HiOutlineInformationCircle} tooltip="Search for candidate by birthname or registered candidate-id"/> */}
                </label>
            </form>
        </div>
    )
}
