import React, { Component } from 'react';
import nps from '../../public/images/nps-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={nps} className="App-logo" alt="logo" />
          <h2>Welcome to Footprints</h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
