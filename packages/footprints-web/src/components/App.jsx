import React, { Component } from 'react';
import * as firebase from "firebase";

import { Navbar } from './Navbar';
import './App.css';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyADAH0pRPowXXZcyWhsPTk9P0_49GliAEI",
  authDomain: "footprints-442fb.firebaseapp.com",
  databaseURL: "https://footprints-442fb.firebaseio.com",
  projectId: "footprints-442fb",
  storageBucket: "",
  messagingSenderId: "576698370523"
};
firebase.initializeApp(config);
export class App extends Component {
  state = {};

  render() {
    this._storeHighScore(5, 100); // Verify POST to firebase works!
    this._fetchParks(); // Get initial park data

    const { activeItem } = this.state;

    return (
      <div className="App">
        <Navbar activeItem={activeItem}/>
        {this.props.children}
      </div>
    );
  }
  _fetchParks() {
    const parks = firebase.database().ref("parks");
    return parks.on("value", function(snapshot) {
      console.log(snapshot.val());
    });
  }

  _storeHighScore(userId, score) {
    firebase
      .database()
      .ref("users/" + userId)
      .set({
        highscore: score
      });
  }
}
