import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function CandidateFinancialinfo() {
    const {candId} = useParams()
    const APIKEY = import.meta.env.VITE_API_KEY;
    const [canFinTot, setCanFinTot] = useState(); // candidate finance totals - aggregated
    const url =
        'https://api.open.fec.gov/v1/candidates/totals/?page=1&per_page=20&candidate_id='
        + candId
        + '1&election_full=true&sort=-election_year&sort_hide_null=false&sort_null_only=false&sort_nulls_last=false&api_key='
        + APIKEY;
        const [isLoading, setIsLoading] = useState(false)
        const [error, setError] = useState("");
        const controller = new AbortController();
console.log(canFinTot)

    useEffect(() => {
        if (!url) {
            setIsLoading(false)
            return;
        }
        console.log('fetched') // console log
        setIsLoading(true)
        axios
            .get(url, {
                signal: controller.signal
            })
            .then((res) => {
                setIsLoading(false);
                if (!controller.signal.aborted) {
                    setCanFinTot(res.data.results[0]);
                }
            })
            .catch((err) => {
                setIsLoading(false);
                if (controller.signal.aborted) {
                    setError(err);
                }
            })

    }, [candId])
    
    return (
        <div>Finance section coming soon
            <div>
                {/* <div>Cash on hand: ${financialSummary[0].cash_on_hand_end}</div> */}
            </div>
        </div>
    )
}

export default CandidateFinancialinfo