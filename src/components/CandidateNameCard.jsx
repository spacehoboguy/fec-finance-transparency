import { Grid, Col, Card, Title, Text, Flex, Subtitle, Divider } from "@tremor/react"
export default function CandidateNameCard({ candidateName, stateCode, partyAffiliation, party }) {

  function handleDecorationColor(party) {
    if (party = "REP") return "red"
    else if (party = "DEM") return "blue"
    else return "yellow"
  }
  return (
    <Card className="max-w-sm " decoration="bottom" decorationColor="red">
      <Grid numItems={1} numItemsLg={2}>
        <Col numColSpan={1} numColSpanLg={2}>
          <Title className="uppercase">Donald J. Trump</Title>
          <Text className="uppercase">Challenger</Text>
        </Col>
        <Divider />
      </Grid>
    </Card>
  )
}
