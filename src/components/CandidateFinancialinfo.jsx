import { Tab, TabGroup, TabList, TabPanel, TabPanels, Flex, Text } from "@tremor/react";

function CandidateFinancialinfo({ data, isLoading, error }) {
    console.log(data)

    return (<>
        <div>Heihei</div>
        {/* <ul>
            {data.map(({years}) => {
                <li key={index}>{years}</li>
            })}
        </ul> */}
    </>
    )
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