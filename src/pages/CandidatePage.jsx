import { NavLink } from 'react-router-dom';
import { HiArrowUturnLeft } from "react-icons/hi2";
import CandidateInfo from '../components/CandidateInfo';
import CandidateFinancialinfo from '../components/CandidateFinancialinfo';

export default function CandidatePage() {

    return (
        <>
            <NavLink className="top-0" to="/explore">
                <HiArrowUturnLeft />
            </NavLink>

            <CandidateInfo />
            {/* <CandidateFinancialinfo /> */}
        </>
    )
}
