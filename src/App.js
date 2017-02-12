import React, { Component } from 'react';
import logo from './logo.svg';
import photos from './national_parks';
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
        <img src={photos.acadia} alt={"arches"} width={"100px"}/>
        <img src={photos.american_samoa} alt={"arches"} width={"100px"}/>
        <img src={photos.arches} alt={"arches"} width={"100px"}/>
      </div>
    );
  }
}

export default App;
