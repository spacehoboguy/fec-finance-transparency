import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';
import { HiArrowUturnLeft } from "react-icons/hi2"

export default function CandidatePage() {
    const { candId } = useParams();
    const [candidateInfo, setCandidateInfo] = useState([])
    const [financialSummary, setFinancialSummary] = useState([])
    const APIKEY = import.meta.env.VITE_API_KEY;

    const fetchData = () => {
        const candidateInfo = 'https://api.open.fec.gov/v1/candidate/' + candId + '/?page=1&per_page=20&office=P&sort=name&sort_hide_null=false&sort_null_only=false&sort_nulls_last=false&api_key=' + APIKEY;
        const candidateFinancialSummary = 'https://api.open.fec.gov/v1/presidential/financial_summary/?page=1&per_page=20&candidate_id=' + candId + '&sort_hide_null=false&sort_null_only=false&sort_nulls_last=false&api_key=' + APIKEY;

        const getCandidateInfo = axios.get(candidateInfo)
        const getFinancialSummary = axios.get(candidateFinancialSummary)
        axios.all([getCandidateInfo, getFinancialSummary])
            .then(axios.spread((...allData) => {
                const allCandidateInfo = allData[0].data.results;
                const allFinancialSummary = allData[1].data.results;
                setCandidateInfo(allCandidateInfo)
                setFinancialSummary(allFinancialSummary)
            })
            )
    }
    useEffect(() => {
        fetchData()
    },[])

    // useEffect(() => {
    //     const controller = new AbortController();
    //     const url = 'https://api.open.fec.gov/v1/candidate/' + candId + '/?page=1&per_page=20&office=P&sort=name&sort_hide_null=false&sort_null_only=false&sort_nulls_last=false&api_key=' + APIKEY;
    //     axios.get(url, {
    //         signal: controller.signal
    //     }).then((res) => {
    //         res.data && setCandidateInfo(res.data.results);
    //     }).catch((err) => {
    //         if (err.response) {
    //             console.log(err.response.data);
    //             console.log(err.response.status);
    //             console.log(err.response.headers);
    //         } else if (err.request) {
    //             console.log(err.request);
    //         } else {
    //             console.log('Error', err.message);
    //         }
    //     })
    //     return () => {
    //         controller.abort();
    //     }
    // }, [candId])
console.log(candidateInfo)
    return (
        <>
            {candidateInfo && <div>
                <NavLink className="top-0" to="/explore">
                    <HiArrowUturnLeft />
                </NavLink>
                <h1 className="font-bold">{candidateInfo.name}</h1>
                <div className='text-xs italic'>{candidateInfo.candidate_id}</div>
                <div className="flex ">
                    <h5 className="text-xs w-32">{candidateInfo.party_full}</h5>
                    <h5 className="text-xs italic">{candidateInfo.incumbent_challenge_full}</h5>
                </div>
                <h5 className="text-xs">Election Cycles: </h5>
                {candidateInfo.election_years.map((value, index) =>
                    <li className="list-none text-xs" key={index}>{value}</li>)
                }
            </div>
            }
        </>
    )
}
