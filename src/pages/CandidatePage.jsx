import CandidateNameCard from "../components/CandidateNameCard";
import { Card, Title, Text, Grid } from "@tremor/react";

export default function CandidatePage() {
    return (
        <main className="">
            {/* Main section */}
            <Card className="">
                <CandidateNameCard />
                <Grid numItemsMd={2} className="mt-6 gap-6">
                    <Card>
                        <div className="h-28" />
                    </Card>
                    <Card>
                        <div className="h-28" />
                    </Card>
                </Grid>
            </Card>
        </main>
    )
}
