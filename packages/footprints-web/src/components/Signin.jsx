import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, Form } from 'semantic-ui-react';
import * as firebase from 'firebase';

import './Signin.css';

export class Signin extends Component {
  static defaultProps = {};
  state = { 
    email: '',
    password: ''
   }

  handleChange = (e, { name, value }) => {
    debugger;
    this.setState({ [name]: value })
  }

  handleSubmit = (e, fields) => {
    debugger;
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        console.log("Error Code", error.code);
        console.log("Error Message", error.message);
      });
  }

  render() {
    const email = "g@google.com";
    const password = "asfdsfdfs8";
    return <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          name="email"
          label="Email" 
          placeholder="Enter your email" 
          onChange={this.handleChange} />
        <Form.Input 
          name="password"
          label="Password" 
          placeholder="Enter your password" 
          onChange={this.handleChange} />
        <Button type="submit">Submit</Button>
      </Form>;
  }
}
