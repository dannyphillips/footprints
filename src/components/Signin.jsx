import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "firebase/database";

export class Signin extends Component {
  static defaultProps = {};
  state = {
    email: "",
    password: "",
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    createUserWithEmailAndPassword(getAuth(), email, password).catch(function (
      error
    ) {
      console.log("Error Code", error.code);
      console.log("Error Message", error.message);
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="email"
          label="Email"
          placeholder="Enter your email"
          onChange={this.handleChange}
        />
        <Form.Input
          name="password"
          label="Password"
          placeholder="Enter your password"
          onChange={this.handleChange}
        />
        <Button type="submit">Sign In</Button>
      </Form>
    );
  }
}
