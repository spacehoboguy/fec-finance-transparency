import { NavLink } from "react-router-dom";
import ExplorePage from "./ExplorePage";


export default function LandingPage() {
  return (
    <div className="box-border h-screen w-screen" >
      <div className="grid place-content-center">
        <div className="grid-cols-2 place-content-center">
          <div className="w-1 h-24 bg-black"></div>
          <h1 className="w-96 h-52 text-black text-6xl font-bold tracking-wider" >Transparency <br />made<br /> accessible</h1>
        </div>
      <div className="">
        <p className="text-xs w-96">Helping voters explore financial information about United States presidential candidates and committees.</p>
      </div>
      <nav className="flex justify-evenly pt-6">
      <NavLink to="/explore" className="w-20 text-center border-2 border-black rounded-md hover:bg-black hover:text-white">Explore</NavLink>
      <NavLink to="/about" className="w-20 text-center border-2 border-black rounded-md hover:bg-black hover:text-white">About</NavLink>
      </nav>
      </div>
    </div>
  )
}
