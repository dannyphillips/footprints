import React from "react"
import { Link } from "react-router"
import { Card, Icon, Label, Image } from 'semantic-ui-react'
import styled from 'styled-components'
import * as posters from "../definitions/posters"
import "./Home.css"

export class Home extends React.Component {

  render() {
    return (
      <div>
        <div className="App-header">
          <h2>Welcome to Footprints</h2>
        </div>
        {Object.keys(posters).map(function(park) {
          return <Link to={`/parks/${park}`} key={park}>
              <Card className="styled-card">
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
              </Card>
            </Link>;
        })}
      </div>
    );
  }
}