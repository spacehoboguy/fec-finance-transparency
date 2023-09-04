import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

function CandidateInfo() {
    const {candId} = useParams()
    const APIKEY = import.meta.env.VITE_API_KEY;
    const url =
        'https://api.open.fec.gov/v1/candidate/'
        + candId
        + '/?page=1&per_page=20&office=P&sort=name&sort_hide_null=false&sort_null_only=false&sort_nulls_last=false&api_key='
        + APIKEY;
    const [candidateInfo, setCandidateInfo] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const controller = new AbortController();
    
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
                    setCandidateInfo(res.data.results[0]);
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
        <>
            {isLoading ? <LoadingSpinner className="justify-center"/> : (
                candidateInfo !== null ? (
                    <div>
                        <h1 className="font-bold">{candidateInfo.name}</h1>
                        <div className='text-xs italic'>{candidateInfo.candidate_id}</div>
                        <div className="flex ">
                            <h5 className="text-xs w-32">{candidateInfo.party_full}</h5>
                            <h5 className="text-xs italic">{candidateInfo.incumbent_challenge_full}</h5>
                        </div>
                        <h5 className="text-xs">Election Cycles: </h5>
                        {candidateInfo.election_years ? (
                            candidateInfo.election_years.map((value, index) =>
                                <li className="list-none text-xs" key={index}>{value}</li>)
                        ) : <div>No election years avalible</div>
                        }
                    </div>
                ) : (<>
                    <div>Data not avalible</div>
                    <div>{error.message}</div>
                </>
                )
            )}
        </>
    )
}
export default CandidateInfo