import React from "react"
import { Link } from "react-router"
import { Card, Icon, Image } from 'semantic-ui-react'
import styled from 'styled-components'
import * as posters from "../definitions/posters"
import "./Home.css"

const StyledCard = styled.Card`
  display: inline-block;
`;

class Home extends React.Component {

  render() {
    return (
      <div>
        <div className="App-header">
          <h2>Welcome to Footprints</h2>
        </div>
        {Object.keys(posters).map(function(park) {
          return (
            <Link to={`/parks/${park}`} key={park}>
              <StyledCard>
                <Image src={posters[park]} />
                <StyledCard.Content>
                  <StyledCard.Header>Daniel</StyledCard.Header>
                  <StyledCard.Meta>Joined in 2016</StyledCard.Meta>
                  <StyledCard.Description>Daniel is a comedian living in Nashville.</StyledCard.Description>
                </StyledCard.Content>
                <StyledCard.Content extra>
                  <a>
                    <Icon name='user' />
                    10 Friends
                  </a>
                </StyledCard.Content>
              </StyledCard>
            </Link>
          )
        })}
      </div>
    )
  }
}

export default Home
