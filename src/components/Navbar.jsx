import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import styled from "styled-components";

import nps from '../images/nps-logo.png';

const StyledNav = styled.div`
  display: block;
`;
const StyledMenu = styled(Menu)`
  border-radius: 0 !important;
`;
const StyledItem = styled(Menu.Item)`
  height: 100%;
`;
export class Navbar extends Component {
  state = {}

  render() {
    const { activeItem } = this.props

    return <StyledNav>
        <StyledMenu stackable inverted>
          <Link to="/">
            <StyledItem onClick={this.handleItemClick}>
              <img src={nps} alt={nps} />
            </StyledItem>
          </Link>
          <Link to="/parks">
            <StyledItem name="parks" active={activeItem === "parks"}>
              Parks
            </StyledItem>
          </Link>
          {/* <Link to="/signin">
            <StyledItem name="sign-in" active={activeItem === "sign-in"}>
              Sign-In
            </StyledItem>
          </Link>
          <Link to="/signout">
            <StyledItem name="sign-out" active={activeItem === "sign-out"}>
              Sign-Out
            </StyledItem>
          </Link>
          <Link to="/signup">
            <StyledItem name="sign-up" active={activeItem === "sign-up"}>
              Sign-up
            </StyledItem>
          </Link> */}
          <Link to="/me">
            <StyledItem name="my-profile" active={activeItem === "my-profile"}>
              My Profile
            </StyledItem>
          </Link>
        </StyledMenu>
      </StyledNav>;
  }
}