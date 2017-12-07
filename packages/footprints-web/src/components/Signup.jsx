import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Signin.css';

export class Signup extends Component {
  static defaultProps = {

  }

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <label>First Name</label>
        <input placeholder="Enter your first name"/>
        <label>Last Name</label>
        <input placeholder="Enter your last name"/>
        <label>Email</label>
        <input placeholder="Enter your email"/>
        <label>Password</label>
        <input placeholder="Enter your password"/>
        <Link to={"signin"}><button>Sign Up</button></Link>
      </div>
    );
  }
}
