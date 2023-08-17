import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';
import { HiArrowUturnLeft } from "react-icons/hi2";
import CandidateInfo from '../components/CandidateInfo';

export default function CandidatePage() {
    const { candId } = useParams();
    const [candidateInfo, setCandidateInfo] = useState([]);
    const [financialSummary, setFinancialSummary] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const APIKEY = import.meta.env.VITE_API_KEY;

    // const fetchData = () => {
    //     //setIsLoading(true);
    //     const candidateInfo = 'https://api.open.fec.gov/v1/candidate/' + candId + '/?page=1&per_page=20&office=P&sort=name&sort_hide_null=false&sort_null_only=false&sort_nulls_last=false&api_key=' + APIKEY;
    //     const candidateFinancialSummary = 'https://api.open.fec.gov/v1/presidential/financial_summary/?page=1&per_page=20&candidate_id=' + candId + '&sort_hide_null=false&sort_null_only=false&sort_nulls_last=false&api_key=' + APIKEY;

    //     const getCandidateInfo = axios.get(candidateInfo)
    //     const getFinancialSummary = axios.get(candidateFinancialSummary)
    //     axios.all([getCandidateInfo, getFinancialSummary])
    //         .then(axios.spread((...allData) => {
    //             const allCandidateInfo = allData[0].data.results;
    //             const allFinancialSummary = allData[1].data.results;
    //             setCandidateInfo(allCandidateInfo)
    //             setFinancialSummary(allFinancialSummary)
    //             //setIsLoading(false); 
    //         }))
    // }
   

    
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
    return (
        <>
        <CandidateInfo />
        {/*             
        <div>
            <div>Cash on hand: ${financialSummary[0].cash_on_hand_end}</div>
        </div> */}
        </>
    )
}
