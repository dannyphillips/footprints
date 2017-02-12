import React, { Component } from 'react';
import * as posters from '../definitions/posters';
import './App.css';

class Park extends Component {

  render() {
    const { params: { name } } = this.props;
    return (
      <div>
        <h2>{name} National Park</h2>
        <img src={posters[name]} alt={name} key={name} width={"100px"}/>
      </div>
    );
  }
}

export default Park;
