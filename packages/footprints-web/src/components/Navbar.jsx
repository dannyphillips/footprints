import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import nps from '../images/nps-logo.png';
import './Navbar.css';

export class Navbar extends Component {
  state = {}

  render() {
    const { activeItem } = this.props

    return <div className="Navbar">
        <Menu stackable inverted>
          <Link to="/home">
            <Menu.Item onClick={this.handleItemClick}>
              <img src={nps} alt={nps} />
            </Menu.Item>
          </Link>
          <Link to="/home">
            <Menu.Item name="parks" active={activeItem === "parks"}>
              Parks
            </Menu.Item>
          </Link>
          <Link to="/signin">
            <Menu.Item name="sign-in" active={activeItem === "sign-in"}>
              Sign-In
            </Menu.Item>
          </Link>
          <Link to="/signout">
            <Menu.Item name="sign-out" active={activeItem === "sign-out"}>
              Sign-Out
            </Menu.Item>
          </Link>
          <Link to="/signup">
            <Menu.Item name="sign-up" active={activeItem === "sign-up"}>
              Sign-up
            </Menu.Item>
          </Link>
          <Link to="/me">
            <Menu.Item name="my-profile" active={activeItem === "my-profile"}>
              My Profile
            </Menu.Item>
          </Link>
        </Menu>
      </div>;
  }
}