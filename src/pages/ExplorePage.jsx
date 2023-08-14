import Search from "../components/Search";

export default function ExplorePage() {
  return (
    <div className="box-border h-screen w-screen ">
      <div className="grid place-content-center">
        <div className="w-1 h-10 bg-black"></div>
        <h1 className=" text-black text-3xl font-bold tracking-wider">Explore</h1>
      </div>
      <main className="grid">
        <Search/>
      </main>
    </div>
  )
}
