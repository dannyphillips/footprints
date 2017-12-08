import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as posters from '../posters/posters';

export class Profile extends Component {
  myParks() {
    return Object.keys(posters).map(function(park) {
      if (park.length >= 15) {
        return (
          <Link to={`/parks/${park}`} key={park}>
            <img src={posters[park]} alt={park} width={"100px"}/>
          </Link>
        );
      }
      else
        return "";
    })
  }

  render() {
    return (
      <div>
        <h2>My Profile</h2>
        <h3>My Parks</h3>
        <div>
        {
          this.myParks()
        }
        </div>
      </div>
    );
  }
}
