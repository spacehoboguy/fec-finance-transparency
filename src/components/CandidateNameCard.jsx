import { Card, Title, Text, Flex, Subtitle, Divider } from "@tremor/react"
export default function CandidateNameCard({ candidateName, stateCode, partyAffiliation}) {
  
  return (
    <Card className="max-w-sm mx-auto" decoration="right" decorationColor="red">
      <Flex className="justify-items-center">
        <Title className="uppercase">{candidateName}</Title>
        <Subtitle>{stateCode}</Subtitle>
      </Flex>
      <Divider/>
      <Text className="">{partyAffiliation}</Text>
    </Card>
  )
}
