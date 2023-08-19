import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import styled from "styled-components";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore/lite";

import { Navbar } from "./Navbar";
import { Parks } from "./Parks";
import { Home } from "./Home";
import { Park } from "./Park";
import { Profile } from "./Profile";
import { Signin } from "./Signin";
import { Signup } from "./Signup";
import { Login } from "./Login";
// import { AuthButton } from "./AuthButton";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyADAH0pRPowXXZcyWhsPTk9P0_49GliAEI",
  authDomain: "footprints-442fb.firebaseapp.com",
  databaseURL: "https://footprints-442fb.firebaseio.com",
  projectId: "footprints-442fb",
  storageBucket: "",
  messagingSenderId: "576698370523",
};
const app = initializeApp(config);

const StyledApp = styled.div`
  text-align: center;
`;

const PrivateRoute = () => {
  const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
    },
    signout(cb) {
      this.isAuthenticated = false;
    },
  };
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return fakeAuth ? <Outlet /> : <Navigate to="/login" />;
};
export class App extends Component {
  state = {};

  async _fetchParks() {
    let parks = await getDocs(collection(getFirestore(app), "parks"));
    return parks;
  }

  async _storeHighScore(userId, score) {
    const ref = doc(getFirestore(app), "users/" + userId);
    await setDoc(ref, {
      highscore: score,
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
          <Routes>
            <Route path="parks/:name" element={<Park/>} />
            {/* <AuthButton /> */}
            <Route path="/login" element={<Login/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/parks" element={<Parks/>} />
            <Route path="/me" element={<PrivateRoute><Profile/></PrivateRoute>}/>
            <Route path="/" element={<Home/>} activeItem={activeItem} />
          </Routes>
        </StyledApp>
      </Router>
    );
  }
}
