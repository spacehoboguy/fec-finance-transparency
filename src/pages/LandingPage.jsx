import { NavLink } from "react-router-dom";
import ExplorePage from "./ExplorePage";



export default function LandingPage() {
  const APIKEY = import.meta.env.VITE_API_KEY;
  const searchRequest = 'https://api.open.fec.gov/v1/names/candidates/?q=donald&api_key=' + APIKEY;
  //const { data } = useGet(searchRequest)

  return (
    <div className="box-border h-screen w-screen" >
      <div className="grid place-content-center">
        <div className="grid-cols-2 place-content-center">
          <div className="w-1 h-24 bg-red-600"></div>
          <h1 className="w-100 h-52 font-bold tracking-normal  text-transparent text-6xl bg-clip-text bg-gradient-to-br from-red-600 via-black to-blue-600 " >Transparency <br />made<br /> accessible</h1>
        </div>
        <div className="">
          <p className="text-s w-96">Helping voters explore financial information about United States presidential candidates and committees.</p>
        </div>
        <nav className="flex justify-evenly pt-10">
          <NavLink to="/explore" className="w-20 text-center border-2 border-black rounded-md shadow-md hover:bg-black hover:shadow-none hover:text-white">Explore</NavLink>
          <NavLink to="/about" className="w-20 text-center border-2 border-black rounded-md shadow-md hover:bg-black hover:shadow-none hover:text-white">About</NavLink>
        </nav>
      </div>
    </div>
  )
}
