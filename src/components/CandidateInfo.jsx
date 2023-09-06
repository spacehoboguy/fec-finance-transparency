import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@tremor/react";
import LoadingSpinner from "./LoadingSpinner";

function CandidateInfo({ data, isLoading, error, party }) {

    const setPartySrc = () => {
        if (party === "REP") {
            return "/src/img/Republicanlogo.svg.png"
        } else if (party === "DEM") {
            return "/src/img/DemocraticLogo.svg.png"
        } else if (party === "LIB") {
            return "/src/img/LibertarianLogo.svg.png"
        } else if (party === "COM") {
            return "/src/img/CPUSA.svg.png"
        } else {
            return "/src/img/notavalible.png"
        }
    }
    return (
        <>
            {isLoading ? <LoadingSpinner /> : (
                data !== null ? (
                    <div className="flex-col py-3">
                        <div className="m-5 p-3 w-fit bg-white rounded-md">
                            <div className="z-10">
                                <h1 className="font-bold">{data.name}</h1>
                                <div className='text-xs italic'>{data.candidate_id}</div>
                                <div className="flex">
                                    <h5 className="text-xs w-32">{data.party_full}</h5>
                                    <h5 className="text-xs italic">{data.incumbent_challenge_full}</h5>
                                </div>
                                {party !== "IND"
                                ?<img
                                    className="z-0 w-10 opacity-50"
                                    src={setPartySrc()} 
                                    alt="Party Logo" 
                                    />
                                :<p className="text-xs">N/A</p>}
                            </div>
                        </div>
                    </div>
                ) : (<>
                    <div>Something went wrong</div>
                </>
                )
            )}
        </>
    )
}
export default CandidateInfo