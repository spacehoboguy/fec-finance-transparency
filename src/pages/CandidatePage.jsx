import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';
import { HiArrowUturnLeft } from "react-icons/hi2"

export default function CandidatePage() {
    const { candId } = useParams();
    const [candidateInfo, setCandidateInfo] = useState()
    const APIKEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        const controller = new AbortController();
        const url = 'https://api.open.fec.gov/v1/candidate/' + candId + '/?page=1&per_page=20&office=P&sort=name&sort_hide_null=false&sort_null_only=false&sort_nulls_last=false&api_key=' + APIKEY;
        axios.get(url, {
            signal: controller.signal
        }).then((res) => {
            res.data && setCandidateInfo(res.data.results);
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
            controller.abort();
        }
    }, [candId])

    return (
        <>
            {candidateInfo && <div>
                <NavLink className="top-0" to="/">
                    <HiArrowUturnLeft />
                </NavLink>
                <h1 className="font-bold">{candidateInfo[0].name}</h1>
                <div className='text-xs italic'>{candidateInfo[0].candidate_id}</div>
                <div className="flex ">
                    <h5 className="text-xs w-32">{candidateInfo[0].party_full}</h5>
                    <h5 className="text-xs italic">{candidateInfo[0].incumbent_challenge_full}</h5>
                </div>
                <h5 className="text-xs">Election Cycles: </h5>
                {candidateInfo[0].election_years.map((value, index) =>
                    <li className="list-none text-xs" key={index}>{value}</li>)
                }
            </div>
            }
        </>
    )
}
