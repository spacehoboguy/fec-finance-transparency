import CandidateNameCard from "../components/CandidateNameCard";
import { Card, Title, Text, Grid } from "@tremor/react";

export default function CandidatePage() {
    return (
        //candidate wrapper
        <div className="">
            <h1 className="font-bold">Candidate Name</h1>
            <div className="flex ">
                <h5 className="text-xs w-32">Republican Party</h5>
                <h5 className="text-xs italic">Challenger</h5>
            </div>
            <h5 className="text-xs">Election Cycles: 1985, 2016, 2020, 2024</h5>

        </div>
    )
}
