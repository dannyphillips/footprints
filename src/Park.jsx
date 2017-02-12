import React, { Component } from 'react';
import * as posters from './national_parks';
import './App.css';

class Park extends Component {

  render() {
    const { params: { name } } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to {name}</h2>
        </div>
        <img src={posters[name]} alt={name} key={name} width={"100px"}/>
      </div>
    );
  }
}

export default Park;
