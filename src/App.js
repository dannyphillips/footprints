import React, { Component } from 'react';
import logo from './logo.svg';
import * as posters from './national_parks';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        </p>
        {Object.keys(posters).map(function(park){
          return <img src={posters[park]} alt={park} key={park} width={"100px"}/>
        })}
      </div>
    );
  }
}

export default App;
