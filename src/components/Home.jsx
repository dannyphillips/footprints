import React from "react"
import { Link } from "react-router-dom"
import { Card, Label, Image } from 'semantic-ui-react'
import styled from "styled-components";
import * as posters from "../posters/posters"

const StyledCard = styled(Card)`
  display: inline-block !important;
  margin: 10px !important;
`;
export class Home extends React.Component {

  render() {
    return (
      Object.keys(posters).map(function(park) {
        return <Link to={`/parks/${park}`} key={park}>
            <StyledCard>
              <Image src={posters[park]} />
              <Card.Content>
                <Card.Header>Yellowstone National Park</Card.Header>
                <Card.Meta>Cheyenne, Wyoming</Card.Meta>
                <Card.Description>
                  Daniel is a comedian living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Label circular color="red">
                  Visited
                </Label>
              </Card.Content>
            </StyledCard>
          </Link>;
      })
    );
  }
}