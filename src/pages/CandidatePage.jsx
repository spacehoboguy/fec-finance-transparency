import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { NavLink, useParams } from 'react-router-dom';
import { HiArrowUturnLeft } from "react-icons/hi2";
import CandidateInfo from '../components/CandidateInfo';
import CandidateFinancialinfo from '../components/CandidateFinancialinfo';

export default function CandidatePage() {
    const { candId } = useParams();
    const APIKEY = import.meta.env.VITE_API_KEY;
    // const candidateInfoUrl =
    //     'https://api.open.fec.gov/v1/candidate/'
    //     + candId
    //     + '/?page=1&per_page=20&office=P&sort=name&sort_hide_null=false&sort_null_only=false&sort_nulls_last=false&api_key='
    //     + APIKEY;
    // const [candidateInfo, setCandidateInfo] = useState(null);
    // const { data , isLoading, error } = useFetch(candidateInfoUrl)

    // useEffect(() => {
    //     if (data && data.length > 0) {
    //         setCandidateInfo(data[0])
    //     } else {
    //         setCandidateInfo(null)
    //     }
    // }, [data])

    return (
        <>
            <NavLink className="top-0" to="/explore">
                <HiArrowUturnLeft />
            </NavLink>

            <CandidateInfo />
             <CandidateFinancialinfo />
        </>
    )
}
