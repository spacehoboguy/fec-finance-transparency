import { NavLink } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import { HiMiniHome } from "react-icons/hi2"


export default function ExplorePage() {
  return (
    <div className="box-border h-screen w-screen ">
      <div className="relative grid place-content-center">
        <div className="w-1 h-10 bg-black"></div>
        <h1 className=" text-black text-3xl font-bold tracking-wider">Explore</h1>
      </div>
        <NavLink className="absolute top-0" to="/">
          <HiMiniHome/>
        </NavLink>
      <main className="grid">
        <SearchInput />
      </main>
    </div>
  )
}
