import { NavLink } from "react-router-dom";


export default function LandingPage() {
  return (
    <div className="box-border h-screen w-screen" >
      <div className=" border-cyan-800 grid place-content-center">
        <h1 className="w-96 h-52 text-black text-6xl font-bold tracking-wider" >Transparency <br/>made<br/> accessible</h1>
      </div>
      <div className="grid place-content-center ">
        <p className="text-xs w-96">Helping voters explore financial information about United States presidential candidates and committees.</p>
      </div>
      
    </div>
  )
}
