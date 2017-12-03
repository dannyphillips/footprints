import React, { Component } from 'react';
import { Link } from 'react-router';

import './Signin.css';

export class Signin extends Component {
  static defaultProps = {

  }

  render() {
    return (
      <div>
        <h2>Sign In</h2>
        <label>Email</label>
        <input placeholder="Enter your email"/>
        <label>Password</label>
        <input placeholder="Enter your password"/>
        <Link to={"me"}><button>Sign In</button></Link>
        <Link to={"signup"}>Don't have an account?</Link>
      </div>
    );
  }
}
