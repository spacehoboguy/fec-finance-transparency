import { NavLink } from "react-router-dom";
import { HiMiniHome } from "react-icons/hi2"

function About() {
  return (
    <div className="box-border h-screen w-screen ">
      <div className="relative grid place-content-center">
        <div className="w-1 h-10 bg-black"></div>
        <h1 className=" text-black text-3xl font-bold tracking-wider">About</h1>
      </div>
      <NavLink className="absolute top-0" to="/">
        <HiMiniHome />
      </NavLink>
      <div className="grid place-content-center pb-5">
        <h2 className="text-center text-lg font-bold pt-10">openPRES</h2>
        <p className="px-60 pb-10 pt-2 font-semibold">
          Our goal is to make browsing and viewing data on United States presidential candidates simple.
          The data is fetched from official sources and is not altered. <br />

          <i className="font-light">*Some data might be calculated from FEC filings such as sums and totals and will be marked appropriately.
            We do not track or collect data from visitors about their browsing habits or interactions on our site.</i>
        </p>
        <h2 className="text-center text-lg font-bold pt-10">openFEC API</h2>
        <p className="px-60 pt-2 font-semibold">
          This site uses data fetched from the open source API openFEC.
          The Federal Election Commission (FEC) API is a RESTful web service supporting full-text and field-specific searches on FEC data.
          Data is updated nightly. <br/>
          <i className="font-light">
          Read more on <a className="hover:underline"href="https://api.open.fec.gov/developers/">https://api.open.fec.gov/developers/</a>
            </i>
        </p>

      </div>
    </div>
  )
}

export default About