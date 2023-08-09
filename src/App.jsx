import useFetch from './hooks/useFetch.jsx'

function App() {
  const trumpFinanceSummaryUrl = "https://api.open.fec.gov/v1/presidential/financial_summary/?page=1&per_page=20&candidate_id=P80001571&sort=-net_receipts&sort_hide_null=false&sort_null_only=false&sort_nulls_last=false&api_key=";
  const {data} = useFetch(trumpFinanceSummaryUrl)
  console.log(data.results)

  return (
    <>
      <h1 className="">Hello world</h1>
    </>
  )
}

export default App
