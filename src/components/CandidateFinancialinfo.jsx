import { Tab, TabGroup, TabList, TabPanel, TabPanels, Flex, Text } from "@tremor/react";
import LoadingSpinner from "./LoadingSpinner";

function CandidateFinancialinfo({ data, isLoading, error, party }) {
    //console.log('data:', data)

    return (
        <>
            <div>Your party is {party}</div>
            {isLoading
                ? <p>Loading..</p>
                : <DisplayYears data={data} />
            }
        </>
    )

    function DisplayYears({ data }) { //display each object
        console.log('data in df', data)
        return (
            <>
                <div>
                    {data.map((item, index) => {
                        return (
                            <p
                                key={index}>
                                {item.candidate_election_year}
                            </p>)
                    })}
                </div>
            </>
        )
    }

    // return (
    //     <div>{isLoading ? <p>Loading...</p> : (
    //         <TabGroup defaultIndex={1} className="m-5">
    //             <TabList variant="solid" color="emerald" className="bg-white rounded-md w-fit">
    //                 {data !== 0 ? (
    //                     data.map((value, index) =>
    //                         <Tab className="list-none text-xs" key={index}>{value}</Tab>
    //                     )
    //                 ) : <div>No election years avalible</div>}
    //             </TabList>
    //             <TabPanels>
    //                 <TabPanel>
    //                     <div className="mt-10">
    //                         <Flex className="mt-4">
    //                             <Text>Info for year </Text>
    //                         </Flex>
    //                     </div>
    //                 </TabPanel>
    //             </TabPanels>
    //         </TabGroup>

    //     )}
    //     </div>
    // )
}

export default CandidateFinancialinfo