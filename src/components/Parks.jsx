import React from "react"
import { Link } from "react-router-dom"
import { Card, Label, Image } from 'semantic-ui-react'
import styled from "styled-components";
import * as posters from "../posters/posters"

const StyledCard = styled(Card)`
  display: inline-block !important;
  margin: 10px !important;
`;
export class Parks extends React.Component {

  render() {
    return (
      Object.keys(posters).map(function(park) {
        return <Link to={`/parks/${park}`} key={park}>
            <StyledCard>
              <Image src={posters[park]} />
              <Card.Content>
                <Card.Header>Yellowstone National Park</Card.Header>
                <Card.Meta>City, State</Card.Meta>
                <Card.Description>
                  Here is a description of the park.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Label circular color="red">
                  Not Visited
                </Label>
              </Card.Content>
            </StyledCard>
          </Link>;
      })
    );
  }
}