import { useState, useEffect } from "react";
import { HiArrowUturnLeft } from "react-icons/hi2"
import { NavLink, useParams } from "react-router-dom";
import axios from 'axios';
import LoadingSpinner from "./LoadingSpinner";
import useFetch from "../hooks/useFetch";


function CandidateInfo() {
    const { candId } = useParams();
    const APIKEY = import.meta.env.VITE_API_KEY;
    const [candidateInfo, setCandidateInfo] = useState();
    const candidateInfoUrl = 'https://api.open.fec.gov/v1/candidate/' + candId + '/?page=1&per_page=20&office=P&sort=name&sort_hide_null=false&sort_null_only=false&sort_nulls_last=false&api_key=' + APIKEY;
    const { data, isLoading, error } = useFetch(candidateInfoUrl)

    console.log()
    useEffect(() => {
        setCandidateInfo(data[0])
    }, [data])

    return (
        <>
            {isLoading ? <LoadingSpinner /> : (
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
            )}
        </>
    )
}
export default CandidateInfo