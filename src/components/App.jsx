import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import firebase from "firebase/app";

import { Navbar } from './Navbar';
import { Parks } from "./Parks";
import { Home } from "./Home";
import { Park } from "./Park";
import { Profile } from "./Profile";
import { Signin } from "./Signin";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { PrivateRoute } from "./PrivateRoute";
// import { AuthButton } from "./AuthButton";

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

const StyledApp = styled.div`
  text-align: center;
`;
export class App extends Component {
  state = {};

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

  render() {
    this._storeHighScore(5, 100); // Verify POST to firebase works!
    this._fetchParks(); // Get initial park data

    const { activeItem } = this.state;

    return (
      <Router>
        <Navbar />
        <StyledApp>
          <Route path="parks/:name" component={Park} />
          {/* <AuthButton /> */}
          <Route path="/login" component={Login} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/parks" component={Parks} />
          <PrivateRoute path="/me" component={Profile} />
          <Route path="/" component={Home} activeItem={activeItem}/>
        </StyledApp>
      </Router>
    );
  }
}
