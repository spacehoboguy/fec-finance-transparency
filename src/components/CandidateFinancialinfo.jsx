import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function CandidateFinancialinfo() {

    const { candId } = useParams();
    const APIKEY = import.meta.env.VITE_API_KEY;
    const [canFinTot, setCanFinTot] = useState(); // candidate finance totals - aggregated
    const canFinTotUrl =
        'https://api.open.fec.gov/v1/candidates/totals/?page=1&per_page=20&candidate_id='
        + candId
        + '1&election_full=true&sort=-election_year&sort_hide_null=false&sort_null_only=false&sort_nulls_last=false&api_key='
        + APIKEY;
    const { data, isLoading, error } = useFetch(canFinTotUrl)
    
    
    useEffect(() => {
        setCanFinTot(data)
    }, [data])
   
    return (
        <div>Finance section coming soon
            <div>
                {/* <div>Cash on hand: ${financialSummary[0].cash_on_hand_end}</div> */}
            </div>
        </div>
    )
}

export default CandidateFinancialinfo