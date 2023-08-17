import { useState, useEffect } from "react";
import { HiArrowUturnLeft } from "react-icons/hi2"
import { NavLink, useParams } from "react-router-dom";
import axios from 'axios';
import LoadingSpinner from "./LoadingSpinner";


function CandidateInfo() {
    const { candId } = useParams();
    const APIKEY = import.meta.env.VITE_API_KEY;
    const [candidateInfo, setCandidateInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const candidateInfoUrl = 'https://api.open.fec.gov/v1/candidate/' + candId + '/?page=1&per_page=20&office=P&sort=name&sort_hide_null=false&sort_null_only=false&sort_nulls_last=false&api_key=' + APIKEY;

    const controller = new AbortController();
    useEffect(() => {
        setIsLoading(true)
        axios.get(candidateInfoUrl).then((res) => {
            console.log(res.data.results)
            res.data && setCandidateInfo(res.data.results);
            setIsLoading(false)

        }).catch((err) => {

            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else if (err.request) {
                console.log(err.request);
            } else {
                console.log('Error', err.message);
            }
        })
        return () => {
        }
    }, [candId])


    return (
        <>

            <NavLink className="top-0" to="/explore">
                <HiArrowUturnLeft />
            </NavLink>

            {candidateInfo==0?<LoadingSpinner/>: (

            <div>
                <h1 className="font-bold">{candidateInfo[0].name}</h1>
                <div className='text-xs italic'>{candidateInfo[0].candidate_id}</div>
                <div className="flex ">
                    <h5 className="text-xs w-32">{candidateInfo[0].party_full}</h5>
                    <h5 className="text-xs italic">{candidateInfo[0].incumbent_challenge_full}</h5>
                </div>
                <h5 className="text-xs">Election Cycles: </h5>
                {
                    candidateInfo[0].election_years.map((value, index) =>
                        <li className="list-none text-xs" key={index}>{value}</li>)
                }
            </div>
            )}

        </>
    )
}
export default CandidateInfo