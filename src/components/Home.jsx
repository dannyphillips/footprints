import React, { Component } from 'react';
import { Link } from 'react-router';
import * as posters from '../definitions/posters';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div>
        {Object.keys(posters).map(function(park){
          return (
            <Link to={`/parks/${park}`} key={park}>
              <img src={posters[park]} alt={park} width={"100px"}/>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Home;
