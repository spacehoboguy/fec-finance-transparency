import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import { HiArrowUturnLeft } from "react-icons/hi2";
import CandidateInfo from '../components/CandidateInfo';
import CandidateFinancialinfo from '../components/CandidateFinancialinfo';

export default function CandidatePage() {
    const { candId } = useParams();
    const APIKEY = import.meta.env.VITE_API_KEY;
    const [candidateParty, setCandidateParty] = useState("");

    const candInfoUrl = //general candidate information
        'https://api.open.fec.gov/v1/candidate/'
        + candId
        + '/?page=1&per_page=20&office=P&sort=name&sort_hide_null=false&sort_null_only=false&sort_nulls_last=false&api_key='
        + APIKEY;
    const [candidateInfo, setCandidateInfo] = useState(null)
    const [isInfoLoading, setIsInfoLoading] = useState(false);
    const [errorCandInfo, setErrorCandInfo] = useState();
    
    const canFinTotUrl = //candidate total financial information
    'https://api.open.fec.gov/v1/candidate/'
    + candId
    + '/totals/?page=1&per_page=20&election_full=true&sort=-cycle&sort_hide_null=false&sort_null_only=false&sort_nulls_last=false&api_key='
    + APIKEY;
    const [canFinTot, setCanFinTot] = useState(null);
    const [isFinTotLoading, setIsFinTotLoading] = useState(false)
    const [errorFinTot, setErrorFinTot] = useState();

    useEffect(() => { // fetch candidate info
        setIsInfoLoading(true)
        axios
            .get(candInfoUrl)
            .then((res) => {
                setIsInfoLoading(false);
                setCandidateInfo(res.data.results[0]);
                setCandidateParty(res.data.results[0].party)

            })
            .catch((err) => {
                setIsInfoLoading(false);
                setErrorCandInfo(err);
            })
    }, [candId])

    useEffect(() => { // fetch candidate financials
        setIsFinTotLoading(true)
        axios
            .get(canFinTotUrl)
            .then((res) => {
                setIsFinTotLoading(false);
                setCanFinTot(res.data.results);

            })
            .catch((err) => {
                setIsFinTotLoading(false);
                setErrorFinTot(err);
            })
    }, [candId])
 
    return (
        <>
            <NavLink className="top-0" to="/explore">
                <HiArrowUturnLeft />
            </NavLink>

            <CandidateInfo data={candidateInfo} isLoading={isInfoLoading} error={errorCandInfo} party={candidateParty} />
            <CandidateFinancialinfo data={canFinTot} isLoading={isFinTotLoading} error={errorFinTot}party={candidateParty} />
        </>
    )
}
