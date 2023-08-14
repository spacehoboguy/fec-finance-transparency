import { Route, Routes } from 'react-router-dom';
import useGet from './hooks/useGet'
import CandidatePage from './pages/CandidatePage';
import LandingPage from './pages/LandingPage';
import ExplorePage from './pages/ExplorePage';
import About from './pages/About';



function App() {
  const trumpFinanceSummaryUrl = "https://api.open.fec.gov/v1/presidential/financial_summary/?page=1&per_page=20&candidate_id=P80001571&sort=-net_receipts&sort_hide_null=false&sort_null_only=false&sort_nulls_last=false&api_key=";
  const APIKEY = import.meta.env.VITE_API_KEY;

  //const { data } = useGet(trumpFinanceSummaryUrl, APIKEY);
  return (
    <>
    <Routes >
      <Route path="/" element={<LandingPage/>} />
      <Route path="/explore" element={<ExplorePage/>} />
      <Route path="/candidate" element={<CandidatePage/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
      
    </>
  )
}

export default App
