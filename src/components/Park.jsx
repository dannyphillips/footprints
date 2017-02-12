import React, { Component } from 'react';
import changeCase from 'change-case';
import * as posters from '../definitions/posters';
import './App.css';

class Park extends Component {

  render() {
    const { params: { name } } = this.props;
    return (
      <div>
        <h2>{changeCase.titleCase(name)} National Park</h2>
        <img src={posters[name]} alt={name} key={name} width={"500px"}/>
      </div>
    );
  }
}

export default Park;
