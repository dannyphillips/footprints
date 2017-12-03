import React, { Component } from 'react';
import { Link } from 'react-router';
import './Profile.css';


import * as posters from '../definitions/posters';

class Profile extends Component {
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

export default Profile;
