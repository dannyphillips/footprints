import React, { Component } from 'react';
import changeCase from 'change-case';
import * as posters from '../definitions/posters';
import './App.css';

class Park extends Component {
  static defaultProps = {
    params2: {
      id: "1",
      name: "badlands",
      date_founded: "Month Day, Year",
      size: "880 acres",
      gps_location: "latitude, longitude",
      city: "City",
      state: "State",
      activiites: "Fishing, Hiking, Camping",
      climate: "Mountain",
      tags: ["Fishing", "Hiking", "Camping"]
    },
  }

  render() {
    const {
      params2: {
        id,
        name,
        date_founded,
        size,
        gps_location,
        city,
        state,
        activiites,
        climate,
        tags
      }
    } = this.props;
    return (
      <div>
        <h2>{changeCase.titleCase(name)} National Park</h2>
        <h3>Founded: {date_founded}</h3>
        <h3>Size: {size}</h3>
        <h3>Location: {city}, {state}</h3>
        <h3>Climate: {climate}</h3>
        <h3>Activities: {activiites}</h3>
        <h3>Tags: {tags}</h3>
        <img src={posters[name]} alt={name} key={name} width={"500px"}/>
      </div>
    );
  }
}

export default Park;