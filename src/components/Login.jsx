import React from "react";
import { redirect } from "react-router-dom";
import { fakeAuth } from "./fakeAuth";

export class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };
  
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }));
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return redirect({from});
    }

    return (
      <div>
        <p>You must log in to view the page</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}