import React, { Component } from 'react';
import { Link } from 'react-router';
import nps from '../public/images/nps-logo.png';
import * as posters from './national_parks';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={nps} className="App-logo" alt="logo" />
          <h2>Welcome to Footprints</h2>
        </div>
        <p className="App-intro">
        </p>
        {Object.keys(posters).map(function(park){
          return (
            <Link to={`/parks/${park}`}>
              <img src={posters[park]} alt={park} key={park} width={"100px"}/>
            </Link>
          );
        })}
        {this.props.children}
      </div>
    );
  }
}

export default App;
